"use client";

import { useEffect } from "react";

const DURATION = 1100;
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Vào trang kèm `?scroll=<id>` thì tự cuộn từ từ xuống phần nội dung đó.
 *
 * Dùng tham số truy vấn chứ không dùng neo `#id`: với neo, trình duyệt và Next
 * nhảy thẳng tới phần tử ngay khi trang mở, nên hoạt ảnh của ta chỉ còn là một
 * đoạn trượt ngắn nối sau cú nhảy — nhìn giật. Tham số truy vấn không mang
 * hành vi cuộn sẵn nào, ta toàn quyền điều khiển.
 */
export function AutoScrollTo({ id, offset = 88 }: { id: string; offset?: number }) {
  useEffect(() => {
    // Đọc thẳng từ địa chỉ thay vì useSearchParams: trang này render tĩnh nên
    // hook đó chưa có giá trị ở lần chạy đầu, effect thoát sớm và không bao giờ
    // cuộn. window.location thì luôn đúng ngay khi effect chạy.
    if (new URLSearchParams(window.location.search).get("scroll") !== id) return;

    let raf = 0;
    const cancel = () => cancelAnimationFrame(raf);

    const run = () => {
      const el = document.getElementById(id);
      if (!el) return;

      // Chỉ bỏ `scroll` để tải lại trang không tự cuộn nữa; `model` phải giữ
      // lại, không thì địa chỉ đang xem mất luôn model và copy link ra sẽ sai
      const url = new URL(window.location.href);
      url.searchParams.delete("scroll");
      history.replaceState(null, "", url.pathname + url.search);

      const to = el.getBoundingClientRect().top + window.scrollY - offset;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.scrollTo(0, to);
        return;
      }

      const from = window.scrollY;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / DURATION, 1);
        // behavior "auto" là bắt buộc: html có scroll-behavior:smooth, không ghi
        // đè thì mỗi khung hình lại bị trình duyệt làm mượt thêm lần nữa
        window.scrollTo({ top: from + (to - from) * easeInOutCubic(t), behavior: "auto" });
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    // Chờ một nhịp cho ảnh hero và bố cục ổn định, nếu không vị trí đo được sẽ
    // lệch khi ảnh tải xong và đẩy nội dung xuống
    const timer = window.setTimeout(run, 220);

    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    return () => {
      window.clearTimeout(timer);
      cancel();
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, [id, offset]);

  return null;
}

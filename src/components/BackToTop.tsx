"use client";

import { useEffect, useRef, useState } from "react";

// Tốc độ của `behavior: "smooth"` do trình duyệt quyết định, không chỉnh được,
// nên phải tự chạy animation mới điều khiển được thời lượng.
const DURATION = 1400;

// Chậm ở hai đầu, nhanh ở giữa — dừng lại êm chứ không khựng.
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function BackToTop() {
  const [show, setShow] = useState(false);
  const raf = useRef(0);

  // Dọn animation nếu component bị gỡ giữa chừng
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  function scrollToTop() {
    cancelAnimationFrame(raf.current);

    const from = window.scrollY;
    if (from === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }

    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      // behavior "auto" là bắt buộc: html có scroll-behavior:smooth, nếu không
      // ghi đè thì mỗi khung hình lại bị trình duyệt làm mượt thêm lần nữa.
      window.scrollTo({ top: from * (1 - easeInOutCubic(t)), behavior: "auto" });
      if (t < 1) raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);
  }

  // Người dùng tự cuộn thì huỷ animation ngay, không giằng co với họ
  useEffect(() => {
    const cancel = () => cancelAnimationFrame(raf.current);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", cancel);
    return () => {
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
    };
  }, []);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      raf = 0;
      // Chỉ hiện sau khi đã rời khỏi màn hình đầu, tránh che nội dung hero
      setShow(window.scrollY > window.innerHeight * 0.9);
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Lên đầu trang"
      // aria-hidden + inert khi ẩn: nút vẫn nằm trong DOM để chạy hiệu ứng mờ,
      // nhưng không được phím Tab chạm tới.
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center rounded-xl bg-orange text-white shadow-[0_12px_30px_-10px_rgba(241,101,34,.85)] transition-all duration-300 hover:bg-orange-2 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

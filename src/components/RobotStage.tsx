"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { Robot } from "@/data/robots";

/** Tên góc chụp suy từ đuôi tên file, tránh phải nhân đôi dữ liệu. */
const VIEW_LABEL: Record<string, string> = {
  front: "Mặt trước",
  side: "Mặt bên",
  back: "Mặt sau",
  angle: "Góc nghiêng",
  cabin: "Khoang chứa",
  close: "Cận cảnh",
  detail: "Chi tiết",
  work: "Khi vận hành",
};

function viewOf(src: string) {
  const m = src.match(/-([a-z]+)\.webp$/);
  return (m && VIEW_LABEL[m[1]]) || "Góc khác";
}

/** Chiều cao vùng ảnh. Robot là nhân vật chính của trang nên để rất lớn. */
export const STAGE_H = "h-[380px] sm:h-[500px] lg:h-[620px]";

const DRAG_PER_FRAME = 130; // px kéo cho mỗi góc
const SETTLE_MS = 420; // thời gian tự xoay về góc gần nhất khi thả tay
const TURN_DEG = 16; // độ nghiêng tối đa quanh trục dọc
const SHIFT_PX = 26; // độ trượt ngang tạo cảm giác có chiều sâu

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function RobotStage({ robot }: { robot: Robot }) {
  const frames = robot.images;
  const many = frames.length > 1;
  const last = frames.length - 1;

  /** Vị trí góc dạng số thực: 1.4 nghĩa là đang ở giữa góc 1 và góc 2.
      Nhờ vậy robot chuyển động liên tục theo tay chứ không nhảy nấc. */
  const [pos, setPos] = useState(0);
  // Bản sao của pos để các hàm xử lý sự kiện đọc được giá trị hiện tại mà
  // không phải lồng lệnh gọi vào trong hàm cập nhật state — hàm đó phải thuần
  // tuý, đặt animation vào trong thì nó không chạy.
  const posRef = useRef(0);
  const write = useCallback((v: number) => {
    posRef.current = v;
    setPos(v);
  }, []);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x: number; from: number } | null>(null);
  const raf = useRef(0);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => cancelAnimationFrame(raf.current);
  }, []);

  // Đổi robot thì component được dựng lại (parent truyền key={robot.slug}),
  // nên pos tự về 0 — không cần logic reset nào ở đây.

  /** Xoay mượt tới một góc cụ thể (khi thả tay hoặc bấm nút chọn góc). */
  const glideTo = useCallback(
    (target: number) => {
      cancelAnimationFrame(raf.current);
      const from = posRef.current;
      if (reduce.current || from === target) {
        write(target);
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / SETTLE_MS, 1);
        write(from + (target - from) * easeOut(t));
        if (t < 1) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    },
    [write],
  );

  const onDown = useCallback(
    (e: React.PointerEvent) => {
      if (!many) return;
      cancelAnimationFrame(raf.current);
      drag.current = { x: e.clientX, from: posRef.current };
      setDragging(true);
      // giữ con trỏ để kéo ra ngoài khung vẫn nhận được sự kiện
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [many],
  );

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      const d = drag.current;
      if (!d) return;
      const next = d.from + (e.clientX - d.x) / DRAG_PER_FRAME;
      // kẹp chứ không quay vòng: đây là vài góc chụp rời rạc, không phải chuỗi
      // ảnh 360° liên tục, quay vòng sẽ thấy nhảy cóc
      write(Math.min(Math.max(next, 0), last));
    },
    [last, write],
  );

  const end = useCallback(() => {
    if (!drag.current) return;
    drag.current = null;
    setDragging(false);
    // thả tay thì tự trượt về góc gần nhất, không dừng lơ lửng giữa hai góc
    glideTo(Math.round(posRef.current));
  }, [glideTo]);

  const index = Math.round(pos);
  // Lệch so với góc chuẩn, dùng để nghiêng thân robot; về 0 khi đã ổn định
  const off = pos - index;

  return (
    <div className="relative">
      {/* Mã model cỡ đại nằm sau lưng robot và bị robot đè lên một phần */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[38%] -translate-y-1/2 select-none text-center text-[clamp(96px,24vw,380px)] font-extrabold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:2px_rgba(28,37,64,.16)]"
      >
        {robot.code}
      </span>

      <div
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={end}
        onPointerCancel={end}
        className={`relative mx-auto flex w-full max-w-[620px] items-end justify-center [perspective:1400px] ${STAGE_H} ${
          many ? (dragging ? "cursor-grabbing" : "cursor-grab") : ""
        }`}
        style={{ touchAction: many ? "pan-y" : undefined }}
      >
        {/* Vệt sàn: nét ngang mờ dần hai đầu cộng bóng ê-líp. Bóng co lại một
            chút khi robot đang xoay, như thể nó hơi nhấc khỏi mặt sàn. */}
        <span
          aria-hidden
          className="absolute bottom-0 h-[1px] w-[88%] bg-gradient-to-r from-transparent via-slateink/25 to-transparent"
        />
        <span
          aria-hidden
          className="absolute bottom-[-6px] h-[34px] rounded-[50%] bg-[radial-gradient(closest-side,rgba(28,37,64,.22),transparent)] blur-[3px] transition-[width,opacity] duration-200"
          style={{ width: `${54 - Math.abs(off) * 14}%`, opacity: 1 - Math.abs(off) * 0.5 }}
        />

        {frames.map((src, i) => {
          // Hai góc kề nhau chồng mờ theo tỉ lệ kéo, nên mắt thấy một chuyển
          // động liền mạch thay vì hai tấm ảnh thay phiên nhau
          const d = pos - i;
          const near = Math.abs(d);
          if (near >= 1.35) return null;
          return (
            <Image
              key={src}
              src={src}
              alt={i === index ? `${robot.name} — ${viewOf(src)}` : ""}
              aria-hidden={i !== index}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 620px, 92vw"
              draggable={false}
              className="select-none object-contain will-change-transform"
              style={{
                opacity: Math.max(0, 1 - near * 1.15),
                transform: `translateX(${-d * SHIFT_PX}px) rotateY(${-d * TURN_DEG}deg) scale(${1 - near * 0.05})`,
              }}
            />
          );
        })}
      </div>

      {many && (
        <div className="mt-7 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2" role="group" aria-label="Chọn góc nhìn">
            {frames.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => glideTo(i)}
                aria-label={viewOf(src)}
                aria-pressed={i === index}
                className={`h-[7px] rounded-full transition-all ${
                  i === index ? "w-9 bg-orange" : "w-[7px] bg-slateink/20 hover:bg-slateink/40"
                }`}
              />
            ))}
          </div>
          <p className="text-[14px] text-slateink/55">
            {viewOf(frames[index])} · <span className="text-slateink/35">kéo ngang để xoay</span>
          </p>
        </div>
      )}
    </div>
  );
}

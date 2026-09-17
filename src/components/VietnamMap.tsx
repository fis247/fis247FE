"use client";

import { useMemo, useRef, useState } from "react";

import type { Office } from "@/data/offices";
import {
  HOANG_SA,
  INSET_W,
  MAP_H,
  MAP_W,
  TRUONG_SA,
  VN_PATH,
  project,
} from "@/data/vietnam-map";

// Khung phụ đặt vào vùng biển bên phải; toạ độ đã kiểm để không đè lên đất liền
const INSET_X = 515;
const INSET_Y = 450;
const INSET_SCALE = 0.95;

const TILT_X = 14; // độ nghiêng nền, tạo cảm giác nhìn chếch từ trên xuống
const PARALLAX = 7; // biên độ nghiêng thêm theo chuột

export function VietnamMap({
  offices,
  activeId,
  onSelect,
}: {
  /** Danh sách đã lọc — văn phòng ngoài danh sách sẽ bị làm mờ, không bỏ đi,
      để người xem vẫn thấy toàn bộ mạng lưới. */
  offices: Office[];
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState<string | null>(null);

  // Ba cặp văn phòng dùng chung một địa chỉ nên trùng toạ độ; gộp lại để
  // không có hai chấm chồng khít lên nhau.
  const markers = useMemo(() => {
    const byPos = new Map<string, Office[]>();
    for (const o of offices) {
      const key = `${o.lon},${o.lat}`;
      byPos.set(key, [...(byPos.get(key) ?? []), o]);
    }
    return [...byPos.values()].map((group) => {
      const [x, y] = project(group[0].lon, group[0].lat);
      return { x, y, group };
    });
  }, [offices]);

  function handleMove(e: React.MouseEvent) {
    const el = wrap.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -PARALLAX,
      y: ((e.clientX - r.left) / r.width - 0.5) * PARALLAX,
    });
  }

  const hovered = hover ? markers.find((m) => m.group[0].id === hover) : null;

  return (
    <div
      ref={wrap}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHover(null);
      }}
      className="relative select-none [perspective:1400px]"
    >
      <svg
        viewBox={`-30 -30 ${MAP_W + 60} ${MAP_H + 60}`}
        role="img"
        aria-label="Bản đồ Việt Nam với vị trí các văn phòng hỗ trợ của FIS247"
        className="h-auto w-full transition-transform duration-300 ease-out [transform-style:preserve-3d]"
        style={{ transform: `rotateX(${TILT_X + tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <defs>
          {/* Hoạ tiết chấm tô kín đất liền: trình duyệt tự lát, không phải
              dựng hàng nghìn thẻ <circle> trong DOM */}
          {/* Ô 8.5 đơn vị: ô 15 cũ rộng đúng bằng Phú Quốc nên cả đảo chỉ
              hứng được một hai chấm và gần như biến mất */}
          <pattern id="vn-dots" width="8.5" height="8.5" patternUnits="userSpaceOnUse">
            <circle cx="4.25" cy="4.25" r="1.9" className="fill-navy/35" />
          </pattern>
        </defs>

        {/* Đất liền: viền thật, tô bằng hoạ tiết chấm */}
        <path d={VN_PATH} fill="url(#vn-dots)" fillRule="evenodd" />
        {/* Đường bờ biển mảnh: đảo nhỏ hơn một ô hoạ tiết vẫn có thể lọt giữa
            các chấm, nét viền đảm bảo đảo nào cũng nhìn thấy */}
        <path
          d={VN_PATH}
          fill="none"
          fillRule="evenodd"
          className="stroke-navy/25"
          strokeWidth={1.1}
          strokeLinejoin="round"
        />

        {/* Hai quần đảo trong khung phụ, theo quy ước bản đồ Việt Nam */}
        <g transform={`translate(${INSET_X} ${INSET_Y}) scale(${INSET_SCALE})`}>
          {/* Nhãn đặt ngay trên từng cụm thay vì một nhãn gộp dưới đáy khung */}
          {(
            [
              ["HOÀNG SA", HOANG_SA],
              ["TRƯỜNG SA", TRUONG_SA],
            ] as const
          ).map(([label, pts]) => {
            const raw = pts.reduce((a, p) => a + p[0], 0) / pts.length;
            // Cụm Hoàng Sa nằm sát mép trái khung, nhãn canh giữa cụm sẽ thò
            // ra ngoài — kéo về trong khung
            const cx = Math.min(Math.max(raw, 44), INSET_W - 44);
            const top = Math.min(...pts.map((p) => p[1]));
            return (
              <g key={label}>
                {pts.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={2.6} className="fill-navy/45" />
                ))}
                <text
                  x={cx}
                  y={top - 12}
                  textAnchor="middle"
                  className="fill-navy/60 text-[15px] font-semibold tracking-[0.1em]"
                >
                  {label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Điểm văn phòng */}
        {markers.map(({ x, y, group }) => {
          const on = group.some((o) => o.id === activeId);
          return (
            <g key={group[0].id}>
              {on && <circle cx={x} cy={y} r={9} className="map-ping fill-orange" />}
              <circle
                cx={x}
                cy={y}
                r={on ? 9 : 6}
                className={`cursor-pointer transition-all ${on ? "fill-orange" : "fill-navy/70 hover:fill-orange"}`}
                onClick={() => onSelect(group[0].id)}
                onMouseEnter={() => setHover(group[0].id)}
              />
            </g>
          );
        })}
      </svg>

      {/* Nhãn tên đặt ngoài SVG để không bị nghiêng theo mặt phẳng bản đồ */}
      {hovered && (
        <span
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-slateink px-3 py-1.5 text-[14px] font-semibold text-white shadow-lg"
          style={{
            left: `${((hovered.x + 30) / (MAP_W + 60)) * 100}%`,
            top: `${((hovered.y + 30) / (MAP_H + 60)) * 100}%`,
          }}
        >
          {hovered.group.map((o) => o.short).join(" · ")}
        </span>
      )}
    </div>
  );
}

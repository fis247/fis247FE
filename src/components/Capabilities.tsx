"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";

type Group = {
  label: string;
  items: string[];
  image: string;
  alt: string;
};

/**
 * Nội dung lấy nguyên văn từ fis247.fpt.com — không thêm mô tả nào khác.
 * Mỗi nhóm dùng một ảnh trong bộ center1–3.
 */
const GROUPS: Group[] = [
  {
    label: "Dịch vụ bảo hành",
    items: [
      "Bảo hành",
      "Bảo dưỡng, bảo trì",
      "Sửa chữa, thay thế linh kiện",
      "Triển khai lắp đặt",
      "Di chuyển trung tâm dữ liệu, phòng máy chủ",
      "Tư vấn quy trình và triển khai công cụ quản lý dịch vụ CNTT (ITSM)",
    ],
    image: "/images/center3.jpg",
    alt: "Kỹ thuật viên FIS247 bảo trì bên trong máy ATM",
  },
  {
    label: "Sản phẩm CNTT",
    items: [
      "AKA247 – Công cụ Quản lý dịch vụ CNTT",
      "Thiết bị bảo vệ máy ATM",
      "Thiết bị đọc thẻ căn cước công dân chuyên dụng",
      "Kiosk thông minh",
      "Thiết bị thu sóng truyền thanh chuyên dụng",
    ],
    image: "/images/center1.jpg",
    alt: "Nhân viên FIS247 hướng dẫn khách hàng sử dụng kiosk thông minh",
  },
  {
    label: "Dịch vụ cho thuê",
    items: ["Cho thuê thiết bị CNTT", "IT onsite (Nguồn lực CNTT)"],
    image: "/images/center2.jpg",
    alt: "Kỹ thuật viên FIS247 vận chuyển thiết bị máy chủ",
  },
];

export function Capabilities() {
  const [tab, setTab] = useState(0);
  const active = GROUPS[tab];

  return (
    <section id="san-pham" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute left-1/2 top-1/4 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-navy/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-[1000px] text-balance text-[30px] font-bold leading-[1.14] tracking-tight text-white sm:text-[42px] lg:text-[52px]">
            FIS247 - Đối tác tin cậy{" "}
            <span className="grad-text">cho hệ thống IT &amp; thiết bị ngân hàng</span>
          </h2>
        </Reveal>

        {/* Thanh tab: đúng ba nhóm của FIS247 */}
        <Reveal delay={0.08}>
          <div className="hide-scrollbar mt-12 flex justify-start gap-1 overflow-x-auto border-b border-white/15 sm:justify-center">
            {GROUPS.map((g, i) => (
              <button
                key={g.label}
                type="button"
                onClick={() => setTab(i)}
                aria-current={i === tab}
                className={`relative shrink-0 px-6 py-[18px] text-[19px] font-medium transition-colors sm:text-[20px] xl:px-7 xl:text-[22px] ${
                  i === tab ? "text-orange" : "text-white/60 hover:text-white/90"
                }`}
              >
                {g.label}
                {i === tab && (
                  <motion.span
                    layoutId="cap-tab-underline"
                    className="absolute inset-x-0 -bottom-px h-[2.5px] bg-orange"
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 0.7, 0.2, 1] }}
            className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <ul className="flex flex-col">
              {active.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 py-3.5 text-2xl font-bold leading-snug tracking-tight text-white sm:text-[28px] xl:text-[32px]"
                >
                  <span
                    className="mt-[0.6em] h-[7px] w-[7px] shrink-0 rounded-full bg-orange"
                    aria-hidden
                  />
                  <span className="text-balance">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

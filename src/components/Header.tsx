"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Trang chủ", href: "#top" },
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Sản phẩm", href: "#san-pham" },
  { label: "Tin tức", href: "#tin-tuc" },
  { label: "Liên hệ", href: "#lien-he" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="shrink-0">
          <Image
            src="/images/logo-light.png"
            alt="FIS247 — Fast. Intelligent. Secure."
            width={1170}
            height={436}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </a>

        {/* Rê chuột: chữ chuyển sang cam, dải cam mọc từ trái sang phải */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap rounded-lg px-3 py-2.5 text-[19px] font-medium text-white/75 transition-colors duration-200 hover:text-orange focus-visible:text-orange xl:px-4 xl:text-[21px]"
            >
              {item.label}
              <span
                aria-hidden
                className="absolute inset-x-3 bottom-0.5 h-[2.5px] origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 xl:inset-x-4"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Tìm kiếm"
            className="hidden h-11 w-11 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/5 hover:text-white xl:flex"
          >
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-[17px] font-medium text-white/70 transition hover:text-white xl:flex"
          >
            VI
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" strokeLinecap="round" />
            </svg>
          </button>

          <a
            href="#lien-he"
            className="hidden whitespace-nowrap rounded-xl bg-gradient-to-b from-orange-2 to-orange px-5 py-3 text-[17px] font-semibold text-white shadow-[0_10px_28px_-10px_rgba(241,101,34,.8)] transition hover:-translate-y-0.5 md:block xl:px-6"
          >
            Nhận tư vấn
          </a>

          <button
            type="button"
            aria-label="Mở menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-lg text-white lg:hidden"
          >
            <span className={`h-[2.5px] w-[26px] rounded bg-current transition ${open ? "translate-y-[8.5px] rotate-45" : ""}`} />
            <span className={`h-[2.5px] w-[26px] rounded bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2.5px] w-[26px] rounded bg-current transition ${open ? "-translate-y-[8.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink/97 px-5 pb-5 backdrop-blur-xl lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/8 py-4 text-[19px] font-medium text-white/80 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lien-he"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-xl bg-gradient-to-b from-orange-2 to-orange px-5 py-3.5 text-center text-[16px] font-semibold text-white"
          >
            Nhận tư vấn
          </a>
        </nav>
      )}
    </header>
  );
}

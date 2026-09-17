"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Neo `/#...` chứ không phải `#...`: từ trang con thì `#san-pham` sẽ tìm trong
// chính trang đó và không đi đâu cả.
const NAV = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/#gioi-thieu" },
  { label: "Sản phẩm", href: "/san-pham?scroll=robot" },
  { label: "Tin tức", href: "/#tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

const HEADER_H = 88;

export function Header() {
  const [solid, setSolid] = useState(false);
  // Header chỉ được phép trong suốt khi đang nằm đè lên một hero ảnh;
  // trang nào mở đầu bằng nội dung thường thì header phải đặc ngay.
  const [overHero, setOverHero] = useState(false);
  const [open, setOpen] = useState(false);
  // Header đang nằm đè lên một section nền sáng hay không
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      raf = 0;
      setSolid(window.scrollY > 40);

      // Chỉ cần xét vài section được đánh dấu nên đọc toạ độ trực tiếp là đủ nhẹ
      const lights = document.querySelectorAll<HTMLElement>("[data-header-light]");
      let over = false;
      for (const el of lights) {
        const r = el.getBoundingClientRect();
        if (r.top <= HEADER_H && r.bottom >= HEADER_H) {
          over = true;
          break;
        }
      }
      setOnLight(over);

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      const hr = hero?.getBoundingClientRect();
      setOverHero(!!hr && hr.top <= HEADER_H && hr.bottom >= HEADER_H);
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

  const shell = onLight
    ? "border-b border-slateink/10 bg-white/85 backdrop-blur-xl"
    : solid || !overHero
      ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
      : "border-b border-transparent bg-gradient-to-b from-ink/80 to-transparent";

  // Chỉ màu chữ lúc nghỉ là khác nhau — rê chuột thì cả hai theme đều chuyển cam
  const navLink = onLight ? "text-slateink/70" : "text-white/75";

  const iconBtn = onLight
    ? "text-slateink/60 hover:bg-slateink/5 hover:text-slateink"
    : "text-white/70 hover:bg-white/5 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${shell}`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Hai phiên bản logo chồng lên nhau, mờ chéo khi đổi nền cho mượt */}
        <Link href="/" className="relative h-9 w-[97px] shrink-0 sm:h-12 sm:w-[129px]">
          <Image
            src="/images/logo-light.png"
            alt="FIS247 — Fast. Intelligent. Secure."
            fill
            priority
            sizes="129px"
            className={`object-contain transition-opacity duration-500 ${
              onLight ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/images/logo.png"
            alt=""
            aria-hidden
            fill
            sizes="129px"
            className={`object-contain transition-opacity duration-500 ${
              onLight ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        {/* Rê chuột: chữ chuyển sang cam, dải cam mọc từ trái sang phải */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative whitespace-nowrap rounded-lg px-3 py-2.5 text-[19px] font-medium transition-colors duration-500 hover:text-orange focus-visible:text-orange xl:px-4 xl:text-[21px] ${navLink}`}
            >
              {item.label}
              <span
                aria-hidden
                className="absolute inset-x-3 bottom-0.5 h-[2.5px] origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 xl:inset-x-4"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Tìm kiếm"
            className={`hidden h-11 w-11 items-center justify-center rounded-lg transition-colors duration-500 xl:flex ${iconBtn}`}
          >
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className={`hidden items-center gap-1.5 rounded-lg px-3 py-2 text-[17px] font-medium transition-colors duration-500 xl:flex ${iconBtn}`}
          >
            VI
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" strokeLinecap="round" />
            </svg>
          </button>

          <Link
            href="/lien-he"
            className="hidden whitespace-nowrap rounded-xl bg-gradient-to-b from-orange-2 to-orange px-5 py-3 text-[17px] font-semibold text-white shadow-[0_10px_28px_-10px_rgba(241,101,34,.8)] transition hover:-translate-y-0.5 md:block xl:px-6"
          >
            Nhận tư vấn
          </Link>

          <button
            type="button"
            aria-label="Mở menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-lg transition-colors duration-500 lg:hidden ${
              onLight ? "text-slateink" : "text-white"
            }`}
          >
            <span className={`h-[2.5px] w-[26px] rounded bg-current transition ${open ? "translate-y-[8.5px] rotate-45" : ""}`} />
            <span className={`h-[2.5px] w-[26px] rounded bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2.5px] w-[26px] rounded bg-current transition ${open ? "-translate-y-[8.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className={`border-t px-5 pb-5 backdrop-blur-xl lg:hidden ${
            onLight ? "border-slateink/10 bg-white/97" : "border-white/10 bg-ink/97"
          }`}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block border-b py-4 text-[19px] font-medium last:border-0 ${
                onLight ? "border-slateink/10 text-slateink/80" : "border-white/8 text-white/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/lien-he"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-xl bg-gradient-to-b from-orange-2 to-orange px-5 py-3.5 text-center text-[16px] font-semibold text-white"
          >
            Nhận tư vấn
          </Link>
        </nav>
      )}
    </header>
  );
}

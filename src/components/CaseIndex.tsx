"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { CASES, CASE_CATS, catLabel } from "@/data/cases";
import { Reveal } from "./Reveal";

export function CaseIndex() {
  const [cat, setCat] = useState<string | null>(null);
  const [active, setActive] = useState(0);

  // Chỉ hiện chủ đề thực sự có bài, tránh nút bấm vào ra danh sách rỗng
  const cats = useMemo(() => CASE_CATS.filter((c) => CASES.some((x) => x.cat === c.id)), []);
  const list = useMemo(() => (cat ? CASES.filter((c) => c.cat === cat) : CASES), [cat]);

  const rows = useRef<(HTMLLIElement | null)[]>([]);

  // Cuộn cũng phải đổi ảnh, không chỉ rê chuột: người dùng lăn chuột giữa
  // trang thì con trỏ không nằm trên hàng nào cả, ảnh sẽ đứng im ở hồ sơ cũ.
  // Dải -45%/-45% chỉ để lọt đúng hàng đang cắt ngang giữa màn hình.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = rows.current.indexOf(e.target as HTMLLIElement);
          if (i >= 0) setActive(i);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    rows.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [list]);

  // Lọc xong danh sách ngắn lại, chỉ số cũ có thể vượt quá số bài còn lại
  const index = Math.min(active, list.length - 1);
  const current = list[index];

  // Không đặt overflow-hidden ở section này: khung ảnh bên trong dùng position
  // sticky, mà sticky bị vô hiệu ngay khi có bất kỳ phần tử cha nào cắt tràn.
  return (
    <section className="relative bg-ink pb-24 pt-16 sm:pt-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="hide-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {[{ id: null as string | null, label: "Tất cả", n: CASES.length }].concat(
              cats.map((c) => ({
                id: c.id as string | null,
                label: c.label,
                n: CASES.filter((x) => x.cat === c.id).length,
              })),
            ).map((c) => {
              const on = cat === c.id;
              return (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => {
                    setCat(c.id);
                    setActive(0);
                  }}
                  aria-pressed={on}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors ${
                    on ? "bg-white text-ink" : "bg-white/[0.06] text-white/65 hover:bg-white/[0.12]"
                  }`}
                >
                  {c.label}
                  <span className={`ml-2 text-[13px] ${on ? "text-ink/50" : "text-white/35"}`}>
                    {c.n}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          {/* Khung ảnh dính bên trái, đổi theo hồ sơ đang lướt tới.
              Ẩn dưới lg: màn hẹp không đủ chỗ cho hai cột, và khung dính trên
              điện thoại sẽ chiếm gần hết màn hình. */}
          <div className="hidden lg:block">
            <div className="sticky top-[120px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-2">
                {list.map((c, i) => (
                  <Image
                    key={c.slug}
                    src={c.image}
                    alt=""
                    aria-hidden
                    fill
                    priority={i === 0}
                    sizes="520px"
                    className={`object-cover transition-all duration-700 ease-out ${
                      i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />

                {/* Số hồ sơ cỡ đại đè lên đáy ảnh */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-4 left-6 text-[110px] font-extrabold leading-none tabular-nums text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,.35)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-orange">
                {current ? catLabel(current.cat) : ""}
              </p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-white/50">
                {current?.tenDuAn}
              </p>
            </div>
          </div>

          <ol className="border-t border-white/12">
            {list.map((c, i) => {
              const on = i === index;
              return (
                <li
                  key={c.slug}
                  ref={(el) => {
                    rows.current[i] = el;
                  }}
                >
                  <Link
                    href={`/tin-tuc/${c.slug}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group grid grid-cols-[auto_1fr] gap-x-6 border-b border-white/12 py-7 sm:gap-x-9 sm:py-9"
                  >
                    <span
                      aria-hidden
                      className={`text-[26px] font-extrabold leading-none tabular-nums transition-colors sm:text-[32px] ${
                        on
                          ? "text-orange"
                          : "text-transparent [-webkit-text-stroke:1.2px_rgba(255,255,255,.3)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/45">
                        {catLabel(c.cat)}
                      </p>
                      <h2
                        className={`mt-2 text-balance text-[20px] font-bold leading-snug tracking-tight transition-colors sm:text-[25px] ${
                          on ? "text-orange-2" : "text-white"
                        }`}
                      >
                        {c.title}
                      </h2>

                      {/* Ảnh chỉ hiện ở màn hẹp, nơi không có khung dính */}
                      <div className="relative mt-4 h-[168px] w-full overflow-hidden rounded-xl lg:hidden">
                        <Image
                          src={c.image}
                          alt=""
                          aria-hidden
                          fill
                          loading="lazy"
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>

                      <p className="mt-4 line-clamp-2 text-[15.5px] leading-relaxed text-white/50">
                        {c.khachHang}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

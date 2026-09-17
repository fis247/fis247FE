"use client";

import Image from "next/image";

import { ROBOTS, ROBOT_CATS, type Robot } from "@/data/robots";

export function RobotGrid({
  activeSlug,
  onPick,
}: {
  activeSlug: string;
  onPick: (r: Robot) => void;
}) {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <h2 className="text-[28px] font-extrabold tracking-tight text-slateink sm:text-[40px]">
          Toàn bộ <span className="grad-text-light">{ROBOTS.length} model</span>
        </h2>
        <p className="text-[15px] text-slateink/45">Chọn một model để xem chi tiết</p>
      </div>

      <div className="mt-12 space-y-14">
        {ROBOT_CATS.map((c) => {
          const models = ROBOTS.filter((r) => r.cat === c.id);
          return (
            <div key={c.id}>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slateink/45">
                {c.label}
                <span className="ml-2 text-slateink/25">{models.length}</span>
              </h3>

              {/* Robot đứng thành hàng trên một vạch sàn chung, không đóng khung
                  từng con — nối tiếp ngôn ngữ của sân khấu phía trên */}
              <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {models.map((r) => {
                  const on = r.slug === activeSlug;
                  return (
                    <li key={r.slug}>
                      <button
                        type="button"
                        onClick={() => onPick(r)}
                        aria-current={on}
                        className="group w-full px-3 pt-6 text-center"
                      >
                        <div className="relative h-[130px] w-full sm:h-[150px]">
                          <Image
                            src={r.images[0]}
                            alt={r.name}
                            fill
                            loading="lazy"
                            sizes="(min-width: 1280px) 220px, (min-width: 640px) 240px, 45vw"
                            className={`object-contain transition-transform duration-300 ease-out ${
                              on ? "-translate-y-1" : "group-hover:-translate-y-2"
                            }`}
                          />
                          {/* Bóng dưới chân, đậm lên khi con robot được chọn */}
                          <span
                            aria-hidden
                            className={`absolute bottom-[-2px] left-1/2 h-[14px] w-[58%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(28,37,64,.2),transparent)] transition-opacity ${
                              on ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                            }`}
                          />
                        </div>

                        {/* Vạch sàn: các ô liền nhau tạo thành một đường thẳng
                            chạy suốt hàng, robot như đứng trên cùng một kệ */}
                        <span
                          aria-hidden
                          className={`mt-1 block h-[2px] transition-colors ${
                            on ? "bg-orange" : "bg-slateink/12 group-hover:bg-slateink/30"
                          }`}
                        />

                        <p
                          className={`mt-4 text-[17px] font-bold tabular-nums tracking-tight transition-colors ${
                            on ? "text-orange" : "text-slateink group-hover:text-orange"
                          }`}
                        >
                          {r.code}
                        </p>
                        <p className="mt-1 text-[13px] text-slateink/40">{r.series ?? c.label}</p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

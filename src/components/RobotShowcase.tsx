"use client";

import { useMemo, useState } from "react";

import { ROBOTS, ROBOT_CATS, type RobotCat } from "@/data/robots";
import { RobotFeatures } from "./RobotFeatures";
import { RobotGrid } from "./RobotGrid";
import { RobotSpecStrip } from "./RobotSpecStrip";
import { RobotStage } from "./RobotStage";

export function RobotShowcase() {
  const [cat, setCat] = useState<RobotCat>("nang-ha");
  const models = useMemo(() => ROBOTS.filter((r) => r.cat === cat), [cat]);
  const [slug, setSlug] = useState(models[0].slug);

  // Đổi nhóm thì model đang chọn không còn trong nhóm mới
  const robot = models.find((r) => r.slug === slug) ?? models[0];
  const catLabel = ROBOT_CATS.find((c) => c.id === cat)!.label;

  return (
    <section
      id="robot"
      data-header-light
      className="relative scroll-mt-[88px] overflow-hidden bg-white py-16 text-slateink sm:py-20"
    >
      {/* Sàn studio: nền trắng chuyển dần xuống xám rất nhạt ở đáy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#fff_0%,#fff_55%,var(--color-mist)_100%)]"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Dải nhóm bám dính khi cuộn, để đổi nhóm bất cứ lúc nào */}
        <div className="sticky top-[88px] z-20 -mx-5 bg-white/85 px-5 py-4 backdrop-blur-xl sm:mx-0 sm:rounded-full sm:px-2">
          <div className="hide-scrollbar flex gap-1.5 overflow-x-auto">
            {ROBOT_CATS.map((c) => {
              const on = c.id === cat;
              const n = ROBOTS.filter((r) => r.cat === c.id).length;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setCat(c.id);
                    setSlug(ROBOTS.find((r) => r.cat === c.id)!.slug);
                  }}
                  aria-pressed={on}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-[15.5px] font-semibold transition-colors ${
                    on ? "bg-slateink text-white" : "text-slateink/60 hover:bg-slateink/[0.06]"
                  }`}
                >
                  {c.label}
                  <span className={`ml-2 text-[13.5px] ${on ? "text-white/60" : "text-slateink/35"}`}>
                    {n}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tên nhóm cỡ đại, robot sẽ đè lên phần dưới của nó */}
        <p className="mt-14 text-center text-[13px] font-semibold uppercase tracking-[0.24em] text-orange">
          {robot.series ?? catLabel}
        </p>
        <h2 className="mx-auto mt-4 max-w-[18ch] text-balance text-center text-[34px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[52px] lg:text-[64px]">
          {robot.name}
        </h2>

        <div className="mt-6">
          {/* key ép dựng lại khi đổi model: góc xoay, animation đang chạy và
              trạng thái kéo đều được đặt lại sạch sẽ */}
          <RobotStage key={robot.slug} robot={robot} />
        </div>

        {/* Chọn phiên bản trong nhóm */}
        {models.length > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {models.map((m) => {
              const on = m.slug === robot.slug;
              return (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => setSlug(m.slug)}
                  aria-pressed={on}
                  className={`rounded-full px-5 py-2.5 text-[15.5px] font-semibold tabular-nums transition-colors ${
                    on
                      ? "bg-orange text-white"
                      : "bg-slateink/[0.06] text-slateink/65 hover:bg-slateink/[0.12]"
                  }`}
                >
                  {m.code}
                </button>
              );
            })}
          </div>
        )}

        <RobotSpecStrip robot={robot} />

        <ul className="mt-12 flex flex-wrap justify-center gap-2">
          {robot.chips.map((c) => (
            <li
              key={c}
              className="rounded-full border border-slateink/15 px-4 py-2 text-[14.5px] text-slateink/70"
            >
              {c}
            </li>
          ))}
        </ul>

        <RobotFeatures robot={robot} />

        <div className="mt-24 border-t border-slateink/12 pt-16">
          <RobotGrid
            activeSlug={robot.slug}
            onPick={(r) => {
              setCat(r.cat);
              setSlug(r.slug);
              document.getElementById("robot")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          />
        </div>
      </div>
    </section>
  );
}

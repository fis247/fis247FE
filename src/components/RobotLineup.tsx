import Image from "next/image";
import Link from "next/link";

import { ROBOTS, ROBOT_CATS, type Robot } from "@/data/robots";
import { Reveal } from "./Reveal";

const CAT_LABEL = Object.fromEntries(ROBOT_CATS.map((c) => [c.id, c.label]));

// Lề đặt trên từng thẻ thay vì dùng `gap`: mỗi thẻ tự mang lề nên bề rộng một
// bản sao là bội số chính xác, dịch 100% sẽ khít tuyệt đối, không hở khe.
const CARD =
  "group/card relative mr-5 flex w-[238px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 pt-6 transition-colors hover:border-orange/50 hover:bg-white/[0.07] sm:w-[268px]";

function Card({ robot, copy }: { robot: Robot; copy: number }) {
  // Thông số đầu tiên là thứ phân biệt các model cùng dòng: S150, S300, S600
  // dùng chung khung gầm nên ảnh giống hệt nhau, chỉ khác tải trọng.
  const key = robot.specs[0];
  const [front, other] = robot.images;

  return (
    <Link
      href={`/san-pham?model=${robot.slug}&scroll=robot`}
      aria-hidden={copy > 0}
      tabIndex={copy > 0 ? -1 : 0}
      className={CARD}
    >
      <p className="text-center text-[20px] font-bold tracking-tight text-white">{robot.code}</p>
      <p className="mt-1 text-center text-[13px] text-white/45">{CAT_LABEL[robot.cat]}</p>

      <div className="relative mt-5 h-[210px] w-full sm:h-[240px]">
        <Image
          src={front}
          alt={copy === 0 ? robot.name : ""}
          fill
          loading="lazy"
          sizes="268px"
          className={`object-contain object-bottom transition-all duration-500 ease-out group-hover/card:-translate-y-2 ${
            other ? "group-hover/card:opacity-0" : ""
          }`}
        />

        {/* Góc thứ hai chồng sẵn bên dưới, rê chuột thì lộ ra — robot như vừa
            xoay mình. Model chỉ có một ảnh thì bỏ qua, không dựng thẻ thừa. */}
        {other && (
          <Image
            src={other}
            alt=""
            aria-hidden
            fill
            loading="lazy"
            sizes="268px"
            className="object-contain object-bottom opacity-0 transition-all duration-500 ease-out group-hover/card:-translate-y-2 group-hover/card:opacity-100"
          />
        )}

        <span
          aria-hidden
          className="absolute inset-x-6 bottom-0 h-[18px] rounded-[50%] bg-[radial-gradient(closest-side,rgba(125,140,212,.45),transparent)] opacity-70 transition-opacity group-hover/card:opacity-100"
        />
      </div>

      {key && (
        <p className="mt-4 border-t border-white/10 py-3.5 text-center text-[14px] text-white/55">
          {key.label} <span className="font-bold tabular-nums text-white">{key.value}</span>
        </p>
      )}

      {/* Bảng tóm tắt trượt lên từ đáy thẻ. Đặt bên trong thẻ chứ không thả nổi
          bên ngoài: dải bị cắt biên nên panel nổi sẽ bị xén mất, mà đặt phía
          trên lại che đúng tiêu đề của cả khối. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full border-t border-white/15 bg-ink-2/95 px-5 pb-5 pt-4 backdrop-blur-sm transition-transform duration-300 ease-out group-hover/card:translate-y-0"
      >
        <p className="text-[14px] font-bold leading-snug text-white">{robot.name}</p>

        <dl className="mt-3 space-y-1.5">
          {robot.specs.slice(0, 3).map((sp) => (
            <div key={sp.label} className="flex items-baseline justify-between gap-3">
              <dt className="text-[12.5px] text-white/45">{sp.label}</dt>
              <dd className="shrink-0 text-[13.5px] font-bold tabular-nums text-white">
                {sp.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-[13px] font-semibold text-orange">Xem chi tiết →</p>
      </div>
    </Link>
  );
}

export function RobotLineup() {
  return (
    <section id="san-pham" className="relative scroll-mt-[88px] overflow-hidden bg-ink py-20 sm:py-28">
      {/* Quầng sáng navy rọi vào dàn robot. Tâm đặt ở 78% chiều cao chứ không
          phải sát đáy: neo ở đáy thì chỗ sáng nhất rơi đúng mép section rồi bị
          overflow-hidden cắt ngang, thành một đường kẻ rõ mồn một. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_62%_at_50%_78%,rgba(68,87,174,.34),transparent_70%)]"
      />
      {/* Hai mép tan dần về đúng màu nền để nối liền với section trên và dưới */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-t from-transparent to-ink"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-orange" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Robot dịch vụ
            </span>
          </div>

          <h2 className="mt-6 max-w-[22ch] text-[32px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[44px] lg:text-[52px]">
            Từ nâng hạ trong nhà xưởng đến{" "}
            <span className="grad-text">đón khách ở sảnh</span>
          </h2>
        </Reveal>
      </div>

      {/* Hai bản sao nối đuôi nhau, mỗi bản tự dịch 100% bề rộng của chính nó
          nên dải chạy vô tận, không có điểm mở đầu hay kết thúc. Một bản rộng
          hơn 5000px, lớn hơn mọi màn hình, nên hai bản là đủ kín. */}
      <Reveal delay={0.1}>
        <div className="group/rail edge-fade mt-12 flex overflow-hidden">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              // Đặt bằng style nội tuyến chứ không phải lớp Tailwind tuỳ ý:
              // `animate-track-left` dùng thuộc tính rút gọn `animation`, đã
              // gồm sẵn thời lượng, nên một lớp cùng độ ưu tiên có thể bị nó
              // ghi đè. Style nội tuyến thì luôn thắng.
              style={{ animationDuration: "110s" }}
              className="flex shrink-0 animate-track-left group-hover/rail:[animation-play-state:paused]"
            >
              {ROBOTS.map((r) => (
                <Card key={`${copy}-${r.slug}`} robot={r} copy={copy} />
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="relative mx-auto mt-12 max-w-[1280px] px-5 sm:px-8">
        <Link
          href="/san-pham?scroll=robot"
          className="group inline-flex items-center gap-3 rounded-[6px] bg-orange px-8 py-[16px] text-[18px] font-semibold leading-tight text-white transition-colors hover:bg-orange-2"
        >
          Xem toàn bộ robot
          <svg viewBox="0 0 20 20" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 10h13M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

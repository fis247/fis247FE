import type { Robot } from "@/data/robots";

export function RobotFeatures({ robot }: { robot: Robot }) {
  return (
    <div className="mt-24">
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-orange" />
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.22em] text-slateink/55">
          Điểm nổi bật
        </h3>
      </div>

      {/* Hai cột thay vì ba: mô tả dài nên cột hẹp bị vụn thành nhiều dòng ngắn */}
      <ul className="mt-10 grid gap-x-20 sm:grid-cols-2">
        {robot.features.map((f, i) => (
          <li
            key={f.title}
            className="flex gap-6 border-t border-slateink/12 py-8 sm:gap-8"
          >
            {/* Số viền rỗng cỡ lớn — cùng thủ pháp với năm ở dòng thời gian và
                mã model sau lưng robot, để cả web nói một thứ ngôn ngữ */}
            <span
              aria-hidden
              className="shrink-0 text-[44px] font-extrabold leading-[0.85] tabular-nums text-transparent [-webkit-text-stroke:1.5px_rgba(28,37,64,.28)] sm:text-[56px]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <p className="text-[19px] font-bold leading-snug tracking-tight text-slateink sm:text-[21px]">
                {f.title}
              </p>
              <p className="mt-3 text-[15.5px] leading-[1.75] text-slateink/60">{f.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

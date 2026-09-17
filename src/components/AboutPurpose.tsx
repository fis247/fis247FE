import { Reveal } from "./Reveal";

/** Sứ mệnh và tầm nhìn trích nguyên văn từ fpt-is.com/ve-fpt-is */
const ITEMS = [
  {
    label: "Sứ mệnh",
    text: "Tại FPT IS, chúng tôi không ngừng sáng tạo để giao dịch giữa chính phủ, doanh nghiệp và người dân diễn ra nhanh chóng, hiệu quả và tin cậy.",
  },
  {
    label: "Tầm nhìn",
    text: "Mỗi người dân, doanh nghiệp Việt Nam trải nghiệm ít nhất một sản phẩm, dịch vụ của FPT IS hàng ngày.",
  },
];

export function AboutPurpose() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <ul className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {ITEMS.map((it, i) => (
            <li key={it.label}>
              <Reveal delay={i * 0.08}>
                {/* Số thứ tự viền rỗng, cùng thủ pháp với dòng thời gian và mã
                    model — giữ cho cả web nói một ngôn ngữ */}
                <span
                  aria-hidden
                  className="block text-[56px] font-extrabold leading-none tabular-nums text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.28)] sm:text-[68px]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-6 text-[15px] font-semibold uppercase tracking-[0.22em] text-orange">
                  {it.label}
                </h2>

                <p className="mt-5 text-balance text-[24px] font-bold leading-[1.42] tracking-tight text-white sm:text-[30px]">
                  {it.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

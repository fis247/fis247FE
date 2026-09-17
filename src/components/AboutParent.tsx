import { Counter, Reveal } from "./Reveal";

/** Số liệu của công ty mẹ, lấy từ fpt-is.com/ve-fpt-is. Ghi rõ là của FPT IS
    chứ không gộp vào FIS247 — hai phạm vi khác nhau, gộp là nói quá. */
const FACTS = [
  { to: 165, suffix: "+", label: "Sản phẩm Made by FPT IS" },
  { to: 252000, suffix: "+", label: "Khách hàng tổ chức, doanh nghiệp" },
  { to: 100000, suffix: "+", label: "Dự án đã triển khai" },
  { to: 3800, suffix: "+", label: "Nhân viên" },
  { to: 29, suffix: "+", label: "Quốc gia đã triển khai" },
  { to: 2150, suffix: "+", label: "Chứng chỉ công nghệ" },
];

export function AboutParent() {
  return (
    <section
      data-header-light
      className="relative overflow-hidden bg-white py-20 text-slateink sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-orange" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.22em] text-slateink/60">
              Công ty mẹ
            </span>
          </div>

          <div className="mt-7 grid gap-x-16 gap-y-8 lg:grid-cols-[0.95fr_1.05fr]">
            <h2 className="text-[32px] font-extrabold leading-[1.14] tracking-tight sm:text-[42px] lg:text-[50px]">
              FIS247 là một phần của{" "}
              <span className="grad-text-light">Công ty TNHH FPT IS</span>
            </h2>

            <p className="text-[18px] leading-[1.72] text-slateink/65 sm:text-[20px]">
              FPT IS là công ty cung cấp sản phẩm, giải pháp, dịch vụ chuyển đổi số hàng đầu tại
              Việt Nam và trong khu vực. Với 30 năm đồng hành cùng hơn 252.000 khách hàng là tổ
              chức, doanh nghiệp trên 29 quốc gia.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-16 grid gap-y-12 border-t border-slateink/12 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {FACTS.map((f) => (
              <div
                key={f.label}
                // Nét ngăn và lề trái phải bỏ cùng lúc ở ô đầu mỗi hàng, nếu chỉ
                // bỏ nét mà giữ lề thì hàng dưới thụt vào so với hàng trên
                className="
                  sm:border-l sm:border-slateink/12 sm:pl-8
                  sm:[&:nth-child(2n+1)]:border-l-0 sm:[&:nth-child(2n+1)]:pl-0
                  lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(2n+1)]:pl-8
                  lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0
                "
              >
                <dt className="text-[40px] font-extrabold leading-none tracking-tight sm:text-[48px]">
                  <Counter to={f.to} suffix={f.suffix} className="grad-text-light" />
                </dt>
                <dd className="mt-3 min-h-[2.6em] max-w-[20ch] text-[16.5px] leading-snug text-slateink/55">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

      </div>
    </section>
  );
}

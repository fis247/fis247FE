import { Counter, Reveal } from "./Reveal";

// Số liệu thật, lấy từ khối năng lực ở trang chủ
const FACTS = [
  { to: 20, suffix: "+", label: "Năm kinh nghiệm" },
  { to: 50, suffix: "+", label: "Văn phòng hỗ trợ toàn quốc" },
  { to: 3400, suffix: "+", label: "Nhân viên" },
  { to: 24, suffix: "x7", label: "Cam kết cung cấp dịch vụ" },
];

export function AboutIntro() {
  return (
    <section id="gioi-thieu" className="relative scroll-mt-[88px] overflow-hidden bg-ink py-20 sm:py-28">
      <div className="aurora pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Tiêu đề bên trái, nội dung bên phải — thay vì tiêu đề nằm một mình
            trên cùng rồi bỏ trống nửa phải như trước */}
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-orange" />
              <span className="text-[14.5px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Về FIS247
              </span>
            </div>

            <h2 className="mt-7 text-[34px] font-bold leading-[1.16] tracking-tight sm:text-[44px] lg:text-[52px]">
              Hơn <span className="grad-text">20 năm</span> đồng hành cùng ngân hàng và doanh nghiệp
              Việt Nam
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-[19px] leading-[1.72] text-white/72 sm:text-[21px]">
                FIS247, trực thuộc Công ty TNHH FPT IS tiên phong trong cung cấp giải pháp bảo trì,
                bảo dưỡng, sửa chữa thiết bị CNTT, hệ thống chuyên dụng ngân hàng, cùng dịch vụ cho
                thuê thiết bị và nhân lực IT onsite.
              </p>
              <p className="text-[19px] leading-[1.72] text-white/72 sm:text-[21px]">
                Với hơn 20 năm kinh nghiệm, chúng tôi cam kết đồng hành cùng ngân hàng và doanh
                nghiệp, giúp tối ưu vận hành, giảm thiểu rủi ro gián đoạn, đảm bảo hoạt động kinh
                doanh liên tục, an toàn và hiệu quả.
              </p>

              {/* Câu mời và nút gộp thành một khối, không để câu cụt nằm cạnh nút */}
              <div className="border-l-2 border-orange pl-6 pt-2">
                <p className="text-[21px] font-medium leading-relaxed text-white sm:text-[24px]">
                  Liên hệ ngay để nhận tư vấn và hỗ trợ nhanh chóng từ đội ngũ chuyên gia FIS247!
                </p>
                <a
                  href="#form-lien-he"
                  className="group mt-6 inline-flex items-center gap-3 rounded-[6px] bg-orange px-8 py-[16px] text-[19px] font-semibold leading-tight text-white transition-colors hover:bg-orange-2"
                >
                  Gửi yêu cầu tư vấn
                  <svg viewBox="0 0 20 20" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 10h13M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Dải số liệu lấp khoảng trống phía dưới và cho khối này sức nặng */}
        <Reveal delay={0.15}>
          <dl className="mt-20 grid gap-y-10 border-t border-white/12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.label} className="lg:border-l lg:border-white/12 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                <dt className="text-[48px] font-extrabold leading-none tracking-tight sm:text-[60px]">
                  {/* Counter tự gắn hậu tố, truyền vào chứ đừng nối thêm bên ngoài */}
                  <Counter to={f.to} suffix={f.suffix} className="grad-text" />
                </dt>
                <dd className="mt-3 max-w-[20ch] text-[17.5px] leading-snug text-white/60">
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

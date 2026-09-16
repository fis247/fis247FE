import Image from "next/image";
import { Counter, Reveal } from "./Reveal";

const STATS = [
  { to: 20, suffix: "+", label: "Năm kinh nghiệm" },
  { to: 63, suffix: "", label: "Tỉnh thành có mặt" },
  { to: 500, suffix: "+", label: "Khách hàng tổ chức" },
  { to: 12000, suffix: "+", label: "Thiết bị quản lý" },
  { to: 6, suffix: "", label: "Dòng robot dịch vụ" },
  { to: 24, suffix: "/7", label: "Trực vận hành" },
];

export function IntroStats() {
  return (
    <section id="gioi-thieu" className="relative overflow-hidden py-24 sm:py-32">
      <div className="aurora absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-[1000px] text-center">
          <h2 className="text-balance text-[30px] font-bold leading-[1.14] tracking-tight text-white sm:text-[42px] lg:text-[50px]">
            FIS247 - Dẫn đầu trong dịch vụ hạ tầng CNTT{" "}
            <span className="grad-text">và thiết bị chuyên dụng ngân hàng</span>
          </h2>
        </Reveal>

        {/* Chân dung đứng trên đường kẻ, không còn khung hộp bao quanh */}
        <div className="mt-20 grid items-end gap-10 border-b border-white/12 lg:grid-cols-[260px_1fr] lg:gap-16">
          <Reveal className="relative mx-auto w-[220px] lg:mx-0 lg:w-[260px]">
            <div className="pointer-events-none absolute -inset-x-10 bottom-0 top-6 rounded-[50%] bg-orange/18 blur-[70px]" />
            <div className="pointer-events-none absolute inset-x-4 bottom-0 h-5 rounded-[50%] bg-black/50 blur-md" />
            <Image
              src="/images/center4.png"
              alt="Đại diện lãnh đạo FIS247"
              width={720}
              height={914}
              sizes="(min-width: 1024px) 260px, 220px"
              className="relative block w-full"
            />
          </Reveal>

          <Reveal delay={0.1} className="pb-12 lg:pb-16">
            <div className="border-l-2 border-orange pl-6 sm:pl-8">
              <p className="max-w-[62ch] text-[18px] leading-[1.7] text-white/80 sm:text-[21px]">
                <span className="font-semibold text-white">FIS247</span> tự hào là chuyên gia trong
                lĩnh vực{" "}
                <span className="font-medium text-orange-2">
                  Dịch vụ hạ tầng Công nghệ thông tin và Thiết bị Chuyên dụng – Ngân hàng
                </span>{" "}
                với các giải pháp chất lượng, đảm bảo vận hành đạt hiệu quả cao nhất và giảm thiểu
                tối đa các thiệt hại gây ra do tình trạng gián đoạn hệ thống.
              </p>
            </div>

            {/* `download` không kèm giá trị: trình duyệt tải về và giữ nguyên tên file gốc */}
            <a
              href="/files/FIS247-Brochure.pdf"
              download
              className="group mt-10 inline-flex items-center gap-3 rounded-[6px] bg-orange px-7 py-[15px] text-[19px] font-semibold leading-tight text-white transition-colors hover:bg-orange-2"
            >
              Tải hồ sơ năng lực
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 10h13M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Ảnh tràn hết bề ngang, tan dần vào nền thay vì nằm trong khung bo góc */}
      {/* Chạy đúng tỉ lệ ảnh gốc 2048×1198 nên không bị cắt trên–dưới */}
      <div className="relative mt-6 aspect-[2048/1198] max-h-[720px] w-full">
        <Image
          src="/images/center5.jpg"
          alt="Trụ sở và đội ngũ nhân sự FIS247"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Phủ nhẹ cho ảnh hoà tông trang, rồi tan dần ở bốn mép */}
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink" />
        <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-white/70">
          Trụ sở &amp; đội ngũ FIS247
        </span>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-y-12 border-t border-white/12 pt-14 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className="px-2 text-center lg:border-l lg:border-white/10 lg:first:border-l-0"
            >
              <div className="text-[32px] font-bold tabular-nums tracking-tight text-white sm:text-[40px]">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <p className="mx-auto mt-2 max-w-[16ch] text-balance text-[13.5px] leading-snug text-white/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Counter, Reveal } from "./Reveal";

/**
 * Số liệu lấy nguyên văn từ fis247.fpt.com.
 * `span` quyết định độ lớn của ô trong lưới bento — số liệu mạnh nhất chiếm ô to.
 */
type Stat = {
  to: number;
  suffix: string;
  unit?: string;
  desc: string;
  span: string;
  size: "hero" | "md" | "sm";
};

const STATS: Stat[] = [
  {
    to: 50,
    suffix: "%",
    unit: "ATM",
    desc: "Được FPT IS bảo hành, bảo trì trên toàn quốc",
    span: "lg:col-span-8",
    size: "hero",
  },
  { to: 3400, suffix: "+", desc: "Nhân viên", span: "lg:col-span-4", size: "md" },

  {
    to: 2000,
    suffix: "+",
    desc: "Chuyên gia tư vấn cấp cao, kỹ sư trình độ quốc tế",
    span: "lg:col-span-4",
    size: "md",
  },
  {
    to: 50,
    suffix: "+",
    unit: "Trung tâm dịch vụ",
    desc: "Mạng lưới trung tâm dịch vụ công nghệ phủ kín lãnh thổ Việt Nam",
    span: "lg:col-span-4",
    size: "md",
  },
  {
    to: 10,
    suffix: "",
    unit: "triệu USD",
    desc: "Kỷ lục hợp đồng dịch vụ",
    span: "lg:col-span-4",
    size: "md",
  },

  { to: 100, suffix: "+", desc: "Khách hàng quốc tế", span: "lg:col-span-3", size: "sm" },
  {
    to: 13,
    suffix: "+",
    unit: "Đối tác",
    desc: "Đối tác chiến lược với hãng công nghệ toàn cầu lớn",
    span: "lg:col-span-3",
    size: "sm",
  },
  { to: 24, suffix: "x7", desc: "Cam kết cung cấp dịch vụ", span: "lg:col-span-3", size: "sm" },
  {
    to: 2000,
    suffix: "+",
    desc: "Chứng chỉ quốc tế từ Cisco, IBM, MS, Oracle, SAP, HP...",
    span: "lg:col-span-3",
    size: "sm",
  },
];

const HERO = STATS[0];
const REST = STATS.slice(1);

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
        <span className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[15px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-[17px]">
          Trụ sở &amp; đội ngũ FIS247
        </span>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Số liệu thuần chữ: không ô, không viền — phân cấp bằng cỡ chữ và khoảng trắng */}
        <Reveal className="mt-24 flex flex-col items-baseline gap-x-10 gap-y-4 lg:flex-row">
          <span className="shrink-0 text-[84px] font-bold leading-[1] tracking-tight sm:text-[120px] lg:text-[148px]">
            <span className="grad-text tabular-nums">
              <Counter to={HERO.to} suffix={HERO.suffix} />
            </span>
            {HERO.unit && (
              <span className="ml-4 align-baseline text-[40px] font-semibold text-white sm:text-[52px]">
                {HERO.unit}
              </span>
            )}
          </span>
          <p className="max-w-[26ch] text-[20px] leading-relaxed text-white/60 sm:text-[23px]">
            {HERO.desc}
          </p>
        </Reveal>

        {/* Ba hàng cố định — số, đơn vị, mô tả — nên các ô luôn thẳng hàng với nhau,
            kể cả ô có đơn vị dài như "Trung tâm dịch vụ" */}
        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {REST.map((s, i) => (
            <Reveal key={s.desc} delay={(i % 4) * 0.07}>
              <div className="grad-text text-[54px] font-bold tabular-nums leading-[1.05] tracking-tight sm:text-[60px] xl:text-[72px]">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              {/* Luôn chiếm một dòng dù có đơn vị hay không, để mô tả bên dưới thẳng hàng */}
              <div className="mt-2.5 min-h-[1.5em] whitespace-nowrap text-[22px] font-semibold leading-tight text-white sm:text-[25px]">
                {s.unit ?? ""}
              </div>
              <p className="mt-4 max-w-[30ch] text-[16px] leading-relaxed text-white/55 sm:text-[17px]">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 text-center">
          <a
            href="#lien-he"
            className="group inline-flex items-center gap-3 rounded-[6px] bg-orange px-7 py-[15px] text-[19px] font-semibold leading-tight text-white transition-colors hover:bg-orange-2"
          >
            Liên hệ ngay
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
    </section>
  );
}

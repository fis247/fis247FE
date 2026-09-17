import Image from "next/image";

import { Reveal } from "./Reveal";

export function AboutIdentity() {
  return (
    <section id="ve-fis247" className="relative scroll-mt-[88px] overflow-hidden bg-ink py-20 sm:py-28">
      <div className="aurora pointer-events-none absolute inset-0 opacity-45" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-orange" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.22em] text-white/60">
              FIS247 là ai
            </span>
          </div>

          <h2 className="mt-7 max-w-[24ch] text-[32px] font-extrabold leading-[1.14] tracking-tight sm:text-[44px] lg:text-[54px]">
            Đơn vị chuyên trách của FPT IS về{" "}
            <span className="grad-text">hạ tầng CNTT và thiết bị chuyên dụng</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal delay={0.08}>
            {/* Nguyên văn đoạn giới thiệu trên fis247.fpt.com, không diễn giải lại */}
            <p className="text-[19px] leading-[1.72] text-white/72 sm:text-[21px]">
              FIS247, trực thuộc Công ty TNHH FPT IS tiên phong trong cung cấp giải pháp bảo trì,
              bảo dưỡng, sửa chữa thiết bị CNTT, hệ thống chuyên dụng ngân hàng, cùng dịch vụ cho
              thuê thiết bị và nhân lực IT onsite.
            </p>
            <p className="mt-6 text-[19px] leading-[1.72] text-white/72 sm:text-[21px]">
              Với hơn 20 năm kinh nghiệm, chúng tôi cam kết đồng hành cùng ngân hàng và doanh
              nghiệp, giúp tối ưu vận hành, giảm thiểu rủi ro gián đoạn, đảm bảo hoạt động kinh
              doanh liên tục, an toàn và hiệu quả.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9 border-t border-white/12 pt-10">
              {[
                { v: "2002", l: "Năm thành lập đơn vị chuyên trách" },
                { v: "50%", l: "Máy ATM toàn quốc do FPT IS bảo hành, bảo trì" },
                { v: "50+", l: "Văn phòng hỗ trợ phủ kín 63 tỉnh thành" },
                { v: "24x7", l: "Cam kết cung cấp dịch vụ" },
              ].map((f) => (
                <div key={f.l}>
                  <dt className="text-[34px] font-extrabold leading-none tracking-tight sm:text-[40px]">
                    <span className="grad-text">{f.v}</span>
                  </dt>
                  <dd className="mt-3 max-w-[22ch] text-[15.5px] leading-snug text-white/55">
                    {f.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/lienhe1.jpg"
                alt="Đội ngũ FIS247"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              {/* Chân ảnh tối dần để ghép vào nền, tránh một cạnh cắt phẳng */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

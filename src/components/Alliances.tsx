import { Reveal } from "./Reveal";

/** `plate`: logo giữ nguyên mực đen bản gốc nên cần tấm nền trắng đỡ phía sau. */
type Logo = { src: string; alt: string; plate?: boolean };

const LOGOS: Logo[] = [
  { src: "/images/partners/p1.webp", alt: "Cisco Gold Certified Partner" },
  { src: "/images/partners/p2.webp", alt: "HP" },
  { src: "/images/partners/p3.webp", alt: "SAP Gold Partner" },
  { src: "/images/partners/p4.webp", alt: "IBM Platinum Business Partner" },
  { src: "/images/partners/p5.webp", alt: "Oracle Platinum Partner" },
  { src: "/images/partners/p6.webp", alt: "Dell Technologies Titanium Partner" },
  { src: "/images/partners/p7.webp", alt: "Fortinet Engage Advanced Partner", plate: true },
  { src: "/images/partners/p8.webp", alt: "Check Point Partner" },
  { src: "/images/partners/p9.webp", alt: "HPE Gold Solution Provider" },
  { src: "/images/partners/p10.webp", alt: "Microsoft Gold Partner", plate: true },
  { src: "/images/partners/p11.webp", alt: "Salesforce Reseller Consulting Partner" },
  { src: "/images/partners/p12.webp", alt: "Lenovo" },
];

export function Alliances() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="text-balance text-[28px] font-bold tracking-tight text-white sm:text-[38px] lg:text-[44px]">
            Đối tác <span className="grad-text">chiến lược</span>
          </h2>
        </Reveal>
      </div>

      {/* Dải logo trượt liên tục từ trái sang phải */}
      <Reveal delay={0.1} className="mt-12">
        <div className="edge-fade overflow-hidden">
          <div className="flex w-max animate-marquee-rev items-center gap-14 sm:gap-20">
            {[...LOGOS, ...LOGOS].map((logo, i) => {
              const img = (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo.src}
                  // Bản lặp lại chỉ để cuộn liền mạch, không đọc lại cho trình đọc màn hình
                  alt={i < LOGOS.length ? logo.alt : ""}
                  aria-hidden={i >= LOGOS.length}
                  draggable={false}
                  className="h-[54px] w-auto max-w-[200px] select-none object-contain sm:h-[62px]"
                />
              );

              return logo.plate ? (
                <div
                  key={`${logo.src}-${i}`}
                  className="flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3"
                >
                  {img}
                </div>
              ) : (
                <div key={`${logo.src}-${i}`} className="flex shrink-0 items-center">
                  {img}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

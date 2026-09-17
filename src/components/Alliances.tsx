import { Reveal } from "./Reveal";

/**
 * `w`/`h` là kích thước thật của file. Khai báo sẵn để trình duyệt tính được
 * tỉ lệ và chừa đúng chỗ ngay từ đầu — nếu thiếu, ảnh chưa tải xong sẽ rộng 0px
 * làm dải co lại rồi giãn ra, sinh khoảng trống lúc tải trang.
 *
 * `plate`: logo giữ nguyên mực đen bản gốc nên cần tấm nền trắng đỡ phía sau.
 */
type Logo = { src: string; alt: string; w: number; h: number; plate?: boolean };

const LOGOS: Logo[] = [
  { src: "/images/partners/p1.webp", alt: "Cisco Gold Certified Partner", w: 225, h: 240 },
  { src: "/images/partners/p2.webp", alt: "HP", w: 520, h: 520 },
  { src: "/images/partners/p3.webp", alt: "SAP Gold Partner", w: 520, h: 260 },
  { src: "/images/partners/p4.webp", alt: "IBM Platinum Business Partner", w: 520, h: 262 },
  { src: "/images/partners/p5.webp", alt: "Oracle Platinum Partner", w: 500, h: 200 },
  { src: "/images/partners/p6.webp", alt: "Dell Technologies Titanium Partner", w: 520, h: 151 },
  {
    src: "/images/partners/p7.webp",
    alt: "Fortinet Engage Advanced Partner",
    w: 320,
    h: 120,
    plate: true,
  },
  { src: "/images/partners/p8.webp", alt: "Check Point Partner", w: 520, h: 520 },
  { src: "/images/partners/p9.webp", alt: "HPE Gold Solution Provider", w: 500, h: 500 },
  {
    src: "/images/partners/p10.webp",
    alt: "Microsoft Gold Partner",
    w: 520,
    h: 193,
    plate: true,
  },
  {
    src: "/images/partners/p11.webp",
    alt: "Salesforce Reseller Consulting Partner",
    w: 200,
    h: 100,
  },
  { src: "/images/partners/p12.webp", alt: "Lenovo", w: 520, h: 173 },
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

      {/* Ba bản sao giống hệt nhau nối đuôi, mỗi bản tự trượt đúng 100% bề rộng
          của chính nó. Khi vòng lặp quay lại, bản kế tiếp đã nằm sẵn đúng vị trí
          bản trước nên mắt không nhận ra điểm nối — dải không có đầu, không có cuối.
          Dùng 3 bản (thay vì 2) để màn hình siêu rộng vẫn luôn được phủ kín. */}
      <Reveal delay={0.1} className="mt-12">
        <div className="edge-fade flex overflow-hidden">
          {[0, 1, 2].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 animate-marquee-track items-center"
              aria-hidden={copy > 0}
            >
              {LOGOS.map((logo) => {
                const img = (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.src}
                    // Bản lặp chỉ để cuộn liền mạch, không cho trình đọc màn hình đọc lại
                    alt={copy === 0 ? logo.alt : ""}
                    width={logo.w}
                    height={logo.h}
                    draggable={false}
                    className="h-[54px] w-auto select-none object-contain sm:h-[62px]"
                  />
                );

                return logo.plate ? (
                  <div
                    key={logo.src}
                    className="mr-14 flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 sm:mr-20"
                  >
                    {img}
                  </div>
                ) : (
                  <div key={logo.src} className="mr-14 flex shrink-0 items-center sm:mr-20">
                    {img}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

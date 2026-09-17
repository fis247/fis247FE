import { Reveal } from "./Reveal";

type Logo = { src: string; alt: string };

const L = (n: number, alt: string, ext = "webp"): Logo => ({
  src: `/images/customers/c${n}.${ext}`,
  alt,
});

// Chia so le: mỗi dải đều có đủ cơ quan nhà nước, ngân hàng và doanh nghiệp
const ROW_A: Logo[] = [
  L(1, "Cơ quan nhà nước Việt Nam"),
  L(3, "Công an Nhân dân Việt Nam"),
  L(5, "Thuế Nhà nước"),
  L(7, "VietinBank"),
  L(9, "VPBank"),
  L(11, "BaoViet Bank"),
  L(13, "SeABank"),
  L(15, "SHB"),
  L(17, "Sở Giao dịch Chứng khoán Hà Nội"),
  L(19, "Eximbank"),
  L(21, "Woori Bank"),
  L(23, "MSB"),
  L(25, "Public Bank"),
  L(27, "Vietlott"),
  L(29, "Coca-Cola"),
  L(31, "Gucci"),
  L(33, "Mead Johnson Nutrition"),
];

const ROW_B: Logo[] = [
  L(2, "Hải quan Việt Nam"),
  L(4, "Bộ Tài chính"),
  L(6, "Vietcombank"),
  L(8, "BIDV"),
  L(10, "TPBank"),
  L(12, "MB Bank"),
  L(14, "Sacombank"),
  L(16, "ABBANK"),
  L(18, "HDBank"),
  L(20, "Standard Chartered"),
  L(22, "HSBC"),
  L(24, "SaigonBank"),
  L(26, "Petrolimex", "svg"),
  L(28, "Kimberly-Clark"),
  L(30, "Samsung Vina Insurance"),
  L(32, "Chanel"),
  L(34, "Newtecons"),
];

// Ô cố định kích thước nên bề rộng dải không phụ thuộc ảnh đã tải hay chưa,
// và lề đặt trên từng ô để một bản sao là bội số chính xác.
const CELL =
  "mr-16 flex h-[104px] w-[196px] shrink-0 items-center justify-center sm:mr-24 sm:w-[228px]";

/** Một dải gồm 3 bản sao nối đuôi nhau — không có điểm đầu, không có điểm cuối. */
function Row({ logos, direction }: { logos: Logo[]; direction: "left" | "right" }) {
  const anim = direction === "left" ? "animate-track-left" : "animate-track-right";
  return (
    <div className="edge-fade flex overflow-hidden">
      {[0, 1, 2].map((copy) => (
        <div
          key={copy}
          className={`flex shrink-0 items-center ${anim} [animation-duration:70s]`}
          aria-hidden={copy > 0}
        >
          {logos.map((logo) => (
            <div key={logo.src} className={CELL}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={copy === 0 ? logo.alt : ""}
                draggable={false}
                className="max-h-[62px] max-w-[164px] select-none object-contain sm:max-h-[68px] sm:max-w-[192px]"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Customers() {
  return (
    <section data-header-light className="bg-white py-24 text-slateink sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-[24ch] text-balance text-[26px] font-bold leading-[1.25] tracking-tight sm:max-w-[30ch] sm:text-[34px] lg:text-[42px]">
            Hân hạnh đồng hành cùng khách hàng{" "}
            <span className="grad-text-light">mọi quy mô và lĩnh vực trong 20+ năm qua</span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-14 space-y-6">
        <Row logos={ROW_A} direction="left" />
        <Row logos={ROW_B} direction="right" />
      </Reveal>
    </section>
  );
}

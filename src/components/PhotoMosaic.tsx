import { PhotoTile } from "./PhotoTile";

type Tile = { src: string; alt: string };

// Hai hàng chạy ngược chiều nhau, mỗi hàng trộn đủ mảng việc:
// điều hành, hạ tầng, thiết bị ngân hàng, triển khai, tự động hoá.
const ROW_A: Tile[] = [
  { src: "/images/subbanner2.jpg", alt: "Trung tâm điều hành FIS247 với màn hình giám sát" },
  { src: "/images/subbanner4.jpg", alt: "Kỹ sư thao tác trên tủ rack thiết bị mạng" },
  { src: "/images/subbanner7.jpg", alt: "Nhân viên hướng dẫn khách hàng sử dụng kiosk thông minh" },
  { src: "/images/subbanner12.jpg", alt: "Kỹ sư kiểm tra hệ thống trong trung tâm dữ liệu" },
  { src: "/images/subbanner9.jpg", alt: "Đội kỹ thuật lắp đặt thiết bị tại điểm giao dịch" },
  { src: "/images/subbanner6.webp", alt: "Robot và cánh tay tự động trong kho vận hành" },
];

const ROW_B: Tile[] = [
  { src: "/images/subbanner1.jpg", alt: "Nhân viên theo dõi bảng giám sát hệ thống" },
  { src: "/images/subbanner11.jpg", alt: "Khách hàng thực hiện giao dịch trên máy ATM" },
  { src: "/images/subbanner8.jpg", alt: "Kỹ thuật viên lắp đặt thiết bị mạng vào tủ rack" },
  { src: "/images/subbanner3.jpg", alt: "Buổi làm việc triển khai giải pháp quản lý dịch vụ CNTT" },
  { src: "/images/subbanner10.jpg", alt: "Cận cảnh sửa chữa, thay thế linh kiện thiết bị" },
  { src: "/images/subbanner5.jpg", alt: "Kỹ thuật viên kiểm tra màn hình cảm ứng kiosk" },
];

const TILE =
  "h-[150px] w-[260px] shrink-0 rounded-xl sm:h-[190px] sm:w-[330px]";
// Ô chỉ rộng tối đa 330px, báo cho next/image biết để không tải ảnh 2560px.
const TILE_SIZES = "(max-width: 640px) 260px, 330px";

/** Tilted, counter-scrolling band of imagery between the hero and the intro. */
export function PhotoMosaic() {
  return (
    <section className="relative -mt-10 overflow-hidden py-14">
      <div className="-rotate-[4deg] scale-110 space-y-4">
        <div className="edge-fade flex w-max animate-marquee gap-4">
          {[...ROW_A, ...ROW_A].map((tile, i) => (
            <PhotoTile
              key={`a-${i}`}
              src={tile.src}
              alt={i < ROW_A.length ? tile.alt : ""}
              sizes={TILE_SIZES}
              className={TILE}
            />
          ))}
        </div>
        <div className="edge-fade flex w-max animate-marquee-rev gap-4">
          {[...ROW_B, ...ROW_B].map((tile, i) => (
            <PhotoTile
              key={`b-${i}`}
              src={tile.src}
              alt={i < ROW_B.length ? tile.alt : ""}
              sizes={TILE_SIZES}
              className={TILE}
            />
          ))}
        </div>
      </div>

      {/* Hoà mép trên/dưới vào nền trang */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
    </section>
  );
}

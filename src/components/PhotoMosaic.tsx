import { PhotoTile } from "./PhotoTile";

type Tile = { src: string; alt: string };

const IMG = (n: number, alt: string): Tile => ({
  src: `/images/subbanner${n}${n === 6 ? ".webp" : ".jpg"}`,
  alt,
});

// Bốn dải, mỗi dải một thứ tự khác nhau để không bị lặp hình theo cột dọc.
const ROWS: Tile[][] = [
  [
    IMG(2, "Trung tâm điều hành FIS247 với màn hình giám sát"),
    IMG(4, "Kỹ sư thao tác trên tủ rack thiết bị mạng"),
    IMG(7, "Nhân viên hướng dẫn khách hàng sử dụng kiosk thông minh"),
    IMG(12, "Kỹ sư kiểm tra hệ thống trong trung tâm dữ liệu"),
    IMG(9, "Đội kỹ thuật lắp đặt thiết bị tại điểm giao dịch"),
    IMG(6, "Robot và cánh tay tự động trong kho vận hành"),
  ],
  [
    IMG(1, "Nhân viên theo dõi bảng giám sát hệ thống"),
    IMG(11, "Khách hàng thực hiện giao dịch trên máy ATM"),
    IMG(8, "Kỹ thuật viên lắp đặt thiết bị mạng vào tủ rack"),
    IMG(3, "Buổi làm việc triển khai giải pháp quản lý dịch vụ CNTT"),
    IMG(10, "Cận cảnh sửa chữa, thay thế linh kiện thiết bị"),
    IMG(5, "Kỹ thuật viên kiểm tra màn hình cảm ứng kiosk"),
  ],
  [
    IMG(9, "Đội kỹ thuật lắp đặt thiết bị tại điểm giao dịch"),
    IMG(6, "Robot và cánh tay tự động trong kho vận hành"),
    IMG(3, "Buổi làm việc triển khai giải pháp quản lý dịch vụ CNTT"),
    IMG(11, "Khách hàng thực hiện giao dịch trên máy ATM"),
    IMG(4, "Kỹ sư thao tác trên tủ rack thiết bị mạng"),
    IMG(10, "Cận cảnh sửa chữa, thay thế linh kiện thiết bị"),
  ],
  [
    IMG(5, "Kỹ thuật viên kiểm tra màn hình cảm ứng kiosk"),
    IMG(12, "Kỹ sư kiểm tra hệ thống trong trung tâm dữ liệu"),
    IMG(1, "Nhân viên theo dõi bảng giám sát hệ thống"),
    IMG(8, "Kỹ thuật viên lắp đặt thiết bị mạng vào tủ rack"),
    IMG(7, "Nhân viên hướng dẫn khách hàng sử dụng kiosk thông minh"),
    IMG(2, "Trung tâm điều hành FIS247 với màn hình giám sát"),
  ],
];

// Lề đặt trên từng ô thay vì dùng `gap`: mỗi ô tự mang lề nên bề rộng một bản
// sao là bội số chính xác, dịch 100% sẽ khít tuyệt đối.
const TILE = "mr-5 h-[160px] w-[278px] shrink-0 rounded-xl sm:h-[210px] sm:w-[365px]";
const TILE_SIZES = "(max-width: 640px) 278px, 365px";

/** Một dải gồm 3 bản sao nối đuôi nhau — không có điểm đầu, không có điểm cuối. */
function Row({ tiles, direction }: { tiles: Tile[]; direction: "left" | "right" }) {
  const anim = direction === "left" ? "animate-track-left" : "animate-track-right";
  return (
    <div className="flex">
      {[0, 1, 2].map((copy) => (
        <div key={copy} className={`flex shrink-0 ${anim}`} aria-hidden={copy > 0}>
          {tiles.map((tile, i) => (
            <PhotoTile
              key={`${tile.src}-${i}`}
              src={tile.src}
              alt={copy === 0 ? tile.alt : ""}
              sizes={TILE_SIZES}
              className={TILE}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Dải ảnh nghiêng giữa hero và phần giới thiệu.
 * Chiều cao section cố định, còn stack 4 dải bên trong cao hơn nên tràn ra
 * và bị cắt — chính phần tràn đó lấp kín hai góc chéo do phép xoay tạo ra.
 */
export function PhotoMosaic() {
  return (
    <section className="relative -mt-10 h-[600px] overflow-hidden sm:h-[720px]">
      {/* Lớp mask bám theo mép màn hình để vệt mờ hai bên nằm đúng chỗ */}
      <div className="edge-fade absolute inset-0">
        <div className="absolute left-1/2 top-1/2 w-[114%] -translate-x-1/2 -translate-y-1/2 -rotate-[4deg] space-y-5">
          {ROWS.map((tiles, i) => (
            <Row key={i} tiles={tiles} direction={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>

      {/* Hoà mép trên/dưới vào nền trang */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
    </section>
  );
}

import type { Robot } from "@/data/robots";

/** Dải thông số dưới chân robot: số cỡ lớn, ngăn nhau bằng nét dọc mảnh. */
export function RobotSpecStrip({ robot }: { robot: Robot }) {
  return (
    <dl className="mt-14 grid grid-cols-2 gap-y-10 border-t border-slateink/12 pt-10 sm:grid-cols-3 lg:grid-cols-6">
      {robot.specs.map((s, i) => (
        <div
          key={s.label}
          // Nét ngăn chỉ vẽ từ cột thứ hai trở đi trên mỗi hàng, nếu vẽ cả cột
          // đầu sẽ thành một nét thừa dính vào mép trái
          className={`px-1 sm:px-5 ${
            i % 2 !== 0 ? "border-l border-slateink/12" : ""
          } sm:border-l sm:border-slateink/12 sm:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:border-l lg:first:border-l-0`}
        >
          {/* Chừa sẵn hai dòng cho nhãn: "Hoạt động liên tục" dài hơn các nhãn
              khác nên xuống dòng, kéo con số của riêng cột đó tụt xuống */}
          <dt className="min-h-[2.6em] text-[12.5px] uppercase leading-[1.3] tracking-[0.12em] text-slateink/50">
            {s.label}
          </dt>
          <dd className="mt-2 text-[30px] font-extrabold leading-none tracking-tight text-slateink sm:text-[34px]">
            {s.value}
          </dd>
          {s.note && <p className="mt-2 text-[13px] leading-snug text-slateink/45">{s.note}</p>}
        </div>
      ))}
    </dl>
  );
}

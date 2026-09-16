"use client";

import { useState } from "react";
import { PhotoTile } from "./PhotoTile";
import { Reveal } from "./Reveal";

const PEOPLE = [
  {
    name: "Nguyễn Minh Tâm",
    role: "Giám đốc Khối CNTT, Ngân hàng thương mại",
    quote:
      "Đội ngũ FIS247 phản hồi rất nhanh khi hệ thống ATM gặp sự cố. Thời gian khắc phục trung bình giảm đáng kể sau khi chúng tôi chuyển sang hợp đồng bảo trì trọn gói.",
  },
  {
    name: "Trần Thu Hà",
    role: "Trưởng phòng Hạ tầng, Tổ chức tài chính",
    quote:
      "Việc di chuyển trung tâm dữ liệu được lên kế hoạch kỹ lưỡng. Toàn bộ quá trình diễn ra trong đêm và sáng hôm sau mọi dịch vụ đều hoạt động bình thường.",
  },
  {
    name: "Lê Quốc Đạt",
    role: "Quản lý Vận hành, Chuỗi bán lẻ",
    quote:
      "Robot vệ sinh giúp chúng tôi duy trì tiêu chuẩn sạch sẽ tại tất cả chi nhánh mà không cần tăng nhân sự trực đêm.",
  },
  {
    name: "Phạm Thị Vân",
    role: "Giám đốc Công nghệ, Doanh nghiệp sản xuất",
    quote:
      "AKA247 giúp chúng tôi nhìn rõ toàn bộ yêu cầu dịch vụ CNTT đang tồn đọng, từ đó phân bổ nguồn lực hợp lý hơn nhiều.",
  },
];

export function Testimonials() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-mist pb-24 text-slateink sm:pb-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-[44px]">
            Đồng hành cùng <span className="grad-text-light">thành công của bạn</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[58ch] text-[15px] leading-relaxed text-slateink/60 sm:text-base">
            Hợp tác cùng chúng tôi để biến tiềm năng thành hiệu suất — xây dựng năng lực, tạo kết quả và
            duy trì tác động lâu dài.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PEOPLE.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slateink/8">
                  <div className="relative">
                    <PhotoTile seed={i + 2} className="aspect-[4/3] w-full" />
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-label={isOpen ? `Ẩn nhận xét của ${p.name}` : `Xem nhận xét của ${p.name}`}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slateink shadow-md transition hover:bg-orange hover:text-white"
                    >
                      <span className={`text-xl leading-none transition-transform ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[16px] font-bold leading-snug">{p.name}</h3>
                    <p className="mt-1.5 text-[13px] leading-snug text-slateink/55">{p.role}</p>
                    {isOpen && (
                      <p className="mt-4 border-t border-slateink/10 pt-4 text-[13.5px] leading-relaxed text-slateink/70">
                        “{p.quote}”
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

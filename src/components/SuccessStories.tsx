import { PhotoTile } from "./PhotoTile";
import { Reveal } from "./Reveal";

const POSTS = [
  {
    tag: "Tin tức",
    date: "15.09.2026",
    title: "FIS247 triển khai robot vệ sinh tự hành cho khối văn phòng ngân hàng",
    body: "Giải pháp robot lau sàn tự động giúp duy trì không gian sạch sẽ ngoài giờ làm việc, giảm 40% nhân công vệ sinh.",
  },
  {
    tag: "Góc nhìn",
    date: "02.09.2026",
    title: "Hoàn tất di chuyển Data Center cho tổ chức tài chính quy mô lớn",
    body: "Dự án di dời hơn 200 thiết bị trong 36 giờ, không gián đoạn dịch vụ giao dịch của khách hàng cuối.",
  },
  {
    tag: "Ghi nhận",
    date: "20.08.2026",
    title: "AKA247 ServiceDesk ra mắt phiên bản mới với trợ lý AI",
    body: "Phiên bản mới bổ sung phân loại yêu cầu tự động và gợi ý phương án xử lý dựa trên lịch sử sự cố.",
  },
  {
    tag: "Sự kiện",
    date: "05.08.2026",
    title: "FIS247 giới thiệu danh mục robot dịch vụ tại triển lãm công nghệ",
    body: "Trình diễn robot lễ tân, giao hàng và khử khuẩn trong môi trường vận hành mô phỏng thực tế.",
  },
];

export function SuccessStories() {
  return (
    <section id="tin-tuc" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-[44px]">
            Câu chuyện <span className="grad-text">thành công</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-orange hover:text-white"
          >
            Xem tất cả tin tức <span aria-hidden>→</span>
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href="#"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-2 transition hover:-translate-y-1.5 hover:border-white/25"
              >
                <PhotoTile seed={i + 1} className="aspect-[16/10] w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.16em]">
                    <span className="text-orange-2">{p.tag}</span>
                    <span className="text-white/35">{p.date}</span>
                  </div>
                  <h3 className="mt-3 text-balance text-[17px] font-semibold leading-snug text-white transition group-hover:text-orange-2">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-white/55">{p.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/70 transition group-hover:gap-2.5 group-hover:text-orange">
                    Đọc thêm <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

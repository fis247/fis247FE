import { Reveal } from "./Reveal";

// Các cột mốc lấy nguyên văn từ trang liên hệ fis247.fpt.com
const MILESTONES: { year: string; items: string[] }[] = [
  { year: "2002", items: ["Thành lập đơn vị chuyên trách về bảo hành, bảo trì và hỗ trợ kỹ thuật CNTT FPT IS."] },
  { year: "2003", items: ["Cung cấp và bảo hành các máy ATM đầu tiên tại Việt Nam."] },
  { year: "2006", items: ["Bảo trì hệ thống Core Network đầu tiên."] },
  { year: "2007", items: ["Bảo trì hệ thống máy chủ Core Banking trị giá 200 tỷ lớn nhất tại thời điểm."] },
  { year: "2008", items: ["Tư vấn triển khai dự án ITSM đầu tiên cho khối Viễn thông."] },
  {
    year: "2010",
    items: [
      "Bảo trì hạ tầng phòng máy cho gần 20 đơn vị thuộc Bộ ban ngành tài chính thuộc các tỉnh trên toàn quốc.",
      "Bắt đầu cho thuê nguồn lực CNTT cho ngân hàng và các công ty FDI.",
    ],
  },
  { year: "2013", items: ["Bảo trì hạ tầng Datacenter cho ngân hàng TMCP thuộc nhóm Big4 tại Việt Nam."] },
  { year: "2015", items: ["Di chuyển Datacenter cho 1 ngân hàng với hơn 20 rack tương đương 400+ đầu thiết bị."] },
  {
    year: "2016",
    items: [
      "Di chuyển Datacenter cho 1 Ngân hàng lớn với hơn 50 rack tương đương 400+ đầu thiết bị.",
      "Triển khai 14000+ máy bán hàng POS cho hệ thống sổ xố điện toán toàn quốc.",
      "Hợp đồng bảo hành và bảo trì hệ thống mạng và bảo mật lõi và chi nhánh cho Ngân hàng lớn nhất Việt Nam trên phạm vi 63 tỉnh thành.",
      "Tư vấn triển khai CA ServiceDesk cho Đơn vị thuộc Bộ Tài chính quy mô trên phạm vi toàn quốc.",
    ],
  },
  {
    year: "2019",
    items: [
      "Tư vấn triển khai dự án ITSM và ITOM cho ngân hàng thuộc Big4 lớn nhất Việt Nam từ trước đến nay.",
      "Ra mắt FPT ATM Guard giải pháp bảo vệ hệ thống ATM trước các rủi ro an ninh.",
    ],
  },
  {
    year: "2023",
    items: [
      "Sản xuất và cung cấp ra thị trường thiết bị xác thực thẻ CCCD gắn chip FPT IDReader.",
      "Cung cấp và triển khai hệ thống Kiosk cho Trung tâm Hành Chính Quận Cầu Giấy Hà Nội.",
    ],
  },
  {
    year: "2024",
    items: [
      "Đạt mốc cung cấp dịch vụ sửa chữa cho 10.000+ thiết bị CNTT và Bộ lưu điện (UPS) cho khách hàng tại Việt Nam.",
      "Cán mốc cung cấp 7000+ ATM/CRM trên thị trường kèm dịch vụ bảo hành.",
      "Cung cấp và triển khai 145 FPT Smart Audio Receiver cho Phòng Văn Hóa TT TP Quy Nhơn.",
    ],
  },
  {
    year: "2025",
    items: [
      "Triển khai ServiceDesk AKA247, nền tảng hỗ trợ kỹ thuật toàn diện.",
      "Cung cấp và triển khai hơn 2000 FPT ATM Guard cho Ngân hàng TM NN lớn nhất Việt Nam.",
      "Cung cấp và triển khai hơn 400 thiết bị FPT IDReader cho ngân hàng thuộc top 10 Ngân hàng Tư nhân uy tín nhất Việt Nam.",
    ],
  },
];

export function Milestones() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-[24ch] text-[30px] font-bold leading-[1.18] tracking-tight sm:text-[42px] lg:text-[50px]">
            FIS247 - Hơn 20 năm{" "}
            <span className="grad-text">bảo vệ hệ thống tài chính &amp; doanh nghiệp</span> vận hành
            liên tục
          </h2>
        </Reveal>

        <ol className="relative mt-16">
          {/* Trục dọc: đậm ở đầu rồi nhạt dần xuống dưới, gợi dòng chảy thời gian */}
          <span
            aria-hidden
            className="absolute bottom-6 left-[7px] top-4 w-px bg-gradient-to-b from-orange via-navy-2 to-white/10"
          />

          {MILESTONES.map((m, i) => {
            const latest = i === MILESTONES.length - 1;
            return (
              <li key={m.year} className="relative pb-14 pl-10 last:pb-0 sm:pl-16">
                <span
                  aria-hidden
                  className={`absolute left-0 top-[14px] h-[15px] w-[15px] rounded-full border-2 ${
                    latest ? "border-orange bg-orange" : "border-navy-3/70 bg-ink-2"
                  }`}
                />

                <Reveal>
                  <div className="grid min-h-[132px] gap-x-10 gap-y-5 sm:grid-cols-[minmax(0,210px)_minmax(0,1fr)]">
                    {/* Số năm viền rỗng; riêng mốc mới nhất tô đặc để dẫn mắt */}
                    <p
                      className={`text-[52px] font-extrabold leading-none tabular-nums sm:text-[68px] ${
                        latest
                          ? "grad-text"
                          : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.3)]"
                      }`}
                    >
                      {m.year}
                    </p>

                    <ul className="space-y-4 pt-1">
                      {m.items.map((it) => (
                        <li key={it} className="flex gap-4">
                          <span
                            aria-hidden
                            className="mt-[12px] h-[5px] w-[5px] shrink-0 rounded-full bg-orange"
                          />
                          <span className="text-[17.5px] leading-[1.7] text-white/70 sm:text-[19px]">
                            {it}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

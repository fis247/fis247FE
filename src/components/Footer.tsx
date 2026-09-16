import Image from "next/image";

// TODO: thay bằng thông tin liên hệ chính thức của FIS247 trước khi bàn giao.
const CONTACT = {
  address: "Đang cập nhật địa chỉ trụ sở",
  hotline: "Đang cập nhật",
  email: "info@fis247.vn",
};

const COLUMNS = [
  {
    title: "Về FIS247",
    links: ["Giới thiệu công ty", "Năng lực & chứng chỉ", "Tuyển dụng", "Tin tức"],
  },
  {
    title: "Dịch vụ",
    links: ["Bảo hành, bảo trì", "Sửa chữa linh kiện", "Di chuyển Data Center", "Tư vấn ITSM", "IT Onsite"],
  },
  {
    title: "Sản phẩm",
    links: ["AKA247 ServiceDesk", "FPT ATM Guard", "FPT IDReader", "Kiosk thông minh", "Robot dịch vụ"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 sm:pt-24">
      {/* Decorative arcs */}
      <div className="pointer-events-none absolute -right-20 top-0 h-full w-[520px] opacity-40">
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M ${400 - i * 42} 0 Q ${230 - i * 30} 200 ${400 - i * 42} 400`}
              stroke={i % 2 === 0 ? "#f16522" : "#4457ae"}
              strokeWidth="1"
              opacity={0.5 - i * 0.07}
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <a href="#lien-he" className="group inline-flex items-center gap-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-[42px]">
            Để chúng tôi đồng hành cùng bạn
          </h2>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange text-white transition group-hover:translate-x-1.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-light.png"
              alt="FIS247"
              width={1170}
              height={436}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-[34ch] text-[14px] leading-relaxed text-white/55">
              Đối tác tin cậy cho hệ thống hạ tầng CNTT, thiết bị chuyên dụng ngân hàng và robot dịch vụ.
            </p>
            <dl className="mt-6 space-y-2 text-[13.5px] text-white/55">
              <div className="flex gap-2">
                <dt className="text-white/35">Địa chỉ:</dt>
                <dd>{CONTACT.address}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/35">Hotline:</dt>
                <dd>{CONTACT.hotline}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/35">Email:</dt>
                <dd>{CONTACT.email}</dd>
              </div>
            </dl>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] text-white/65 transition hover:text-orange-2">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-7 text-[13px] text-white/40">
          <p>© {new Date().getFullYear()} FIS247. Bản quyền thuộc về công ty.</p>
          <p className="tracking-wide">Fast. Intelligent. Secure.</p>
        </div>
      </div>
    </footer>
  );
}

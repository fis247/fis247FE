import Image from "next/image";

// Thông tin lấy nguyên văn từ chân trang fis247.fpt.com
const COMPANY = "CÔNG TY TNHH FPT IS";

const CONTACT = [
  {
    key: "address",
    label: "Địa chỉ",
    text: "Số 10 phố Phạm Văn Bạch, phường Cầu Giấy, thành phố Hà Nội, Việt Nam",
    href: null,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
      </>
    ),
  },
  {
    key: "phone",
    label: "Hotline",
    text: "1800 6861/line 3",
    href: "tel:18006861",
    icon: (
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h2.2a1 1 0 0 1 1 .8l.8 3a1 1 0 0 1-.4 1L7.6 10a12 12 0 0 0 6.4 6.4l1.2-1.5a1 1 0 0 1 1-.4l3 .8a1 1 0 0 1 .8 1v2.2a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 4 5.5Z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: "email",
    label: "Email",
    text: "fis247@fpt.com",
    href: "mailto:fis247@fpt.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 6.5 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    key: "web",
    label: "Website",
    text: "fpt-is.com",
    href: "https://fpt-is.com",
    icon: (
      <path
        d="M10 13.5a4 4 0 0 0 5.7.4l2.6-2.6a4 4 0 1 0-5.7-5.7l-1.3 1.3M14 10.5a4 4 0 0 0-5.7-.4l-2.6 2.6a4 4 0 1 0 5.7 5.7l1.3-1.3"
        strokeLinecap="round"
      />
    ),
  },
];

const COLUMNS = [
  {
    title: "Dịch vụ",
    href: "/#san-pham",
    links: [
      "Bảo hành",
      "Bảo dưỡng bảo trì",
      "Sửa chữa, thay thế linh kiện",
      "Di chuyển Trung tâm dữ liệu, Phòng máy chủ",
      "Tư vấn quy trình và triển khai công cụ quản lý dịch vụ CNTT (ITSM)",
      "Triển khai thiết bị chuyên dụng",
      "Cho thuê nguồn lực và thiết bị CNTT",
    ],
  },
  {
    title: "Sản phẩm",
    href: "/#san-pham",
    links: [
      "AKA247 – Công cụ quản lý Dịch vụ CNTT",
      "Thiết bị bảo vệ máy ATM",
      "Thiết bị đọc thẻ căn cước công dân chuyên dụng",
      "Kiosk thông minh",
      "Thiết bị thu sóng truyền thanh chuyên dụng",
    ],
  },
  {
    title: "Liên hệ",
    href: "/lien-he",
    links: ["Về FIS247", "Văn phòng hỗ trợ", "Liên hệ"],
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
        <a href="/lien-he" className="group inline-flex items-center gap-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-[42px]">
            Để chúng tôi đồng hành cùng bạn
          </h2>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange text-white transition group-hover:translate-x-1.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>

        {/* Cột trái rộng hơn vì danh sách dịch vụ có những dòng khá dài */}
        <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1.1fr_1.1fr_0.75fr]">
          <div>
            {/* Logo và tên công ty căn giữa theo cột; danh sách liên hệ bên dưới
                vẫn căn trái để các dòng địa chỉ dài đọc được */}
            <div className="text-center">
              <Image
                src="/images/logo2.png"
                alt={COMPANY}
                width={801}
                height={401}
                sizes="(min-width: 1024px) 400px, 320px"
                className="mx-auto h-auto w-full max-w-[400px]"
              />
              <p className="mt-4 text-[18.5px] font-bold tracking-tight text-white">{COMPANY}</p>
            </div>

            <dl className="mt-6 space-y-4">
              {CONTACT.map((c) => (
                <div key={c.key} className="flex gap-3">
                  <dt className="mt-0.5 shrink-0 text-orange" title={c.label}>
                    <span className="sr-only">{c.label}</span>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                      {c.icon}
                    </svg>
                  </dt>
                  <dd className="text-[15.5px] leading-relaxed text-white/65">
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="transition-colors hover:text-orange-2"
                      >
                        {c.text}
                      </a>
                    ) : (
                      c.text
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title}>
              {/* Gạch chân bám sát bề rộng chữ, giống chân trang gốc */}
              <h3 className="inline-block border-b-2 border-orange pb-2 text-[15.5px] font-bold uppercase tracking-[0.14em] text-white">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href={col.href}
                      className="text-[15.5px] leading-relaxed text-white/65 transition-colors hover:text-orange-2"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-7 text-[14px] text-white/45">
          <p>© {new Date().getFullYear()} {COMPANY}. Bản quyền thuộc về công ty.</p>
          <p className="tracking-wide">Fast. Intelligent. Secure.</p>
        </div>
      </div>
    </footer>
  );
}

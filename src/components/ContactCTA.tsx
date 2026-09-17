"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "./Reveal";

// Danh sách lựa chọn lấy nguyên văn từ form trên fis247.fpt.com
const JOB_TITLES = [
  "Giám đốc",
  "Giám đốc Khối/ Trung tâm CNTT",
  "Cán bộ IT",
  "Quản lý/ Cán bộ mua sắm",
  "Khác",
];

const INTERESTS = [
  "Dịch vụ Bảo hành",
  "Dịch vụ Bảo dưỡng bảo trì",
  "Dịch vụ Sửa chữa, thay thế linh kiện",
  "Dịch vụ Di chuyển DataCenter, Phòng máy chủ",
  "Dịch vụ Tư vấn quy trình và triển khai công cụ quản lý dịch vụ CNTT (ITSM)",
  "Dịch vụ Triển khai thiết bị chuyên dụng",
  "Dịch vụ cho thuê",
  "Sản phẩm ServiceDesk AKA247",
  "Sản phẩm FPT ATM Guard",
  "Sản phẩm FPT IDReader",
  "Sản phẩm FPT Kiosk",
  "Sản phẩm FPT Smart Audio Receiver",
  "Robot Giao hàng",
  "Robot Khử khuẩn",
  "Robot Lễ tân",
  "Robot Nâng hạ công nghiệp",
  "Robot Vệ sinh",
  "Robot Xe nâng công nghiệp",
  "Dịch vụ và sản phẩm khác",
];

type Status = "idle" | "sending" | "sent" | "error";

/* Trường nhập chỉ còn một nét gạch chân — không hộp, không bo góc. */
const FIELD =
  "w-full border-0 border-b border-slateink/25 bg-transparent px-0 py-3 text-[17px] text-slateink outline-none transition-colors placeholder:text-slateink/35 focus:border-orange";

const SELECT = `${FIELD} appearance-none pr-8 [&>option]:bg-white [&>option]:text-slateink`;

/** Nhãn đánh số như dải tiến trình ở hero, cho form có nhịp riêng. */
function Field({
  index,
  label,
  required,
  children,
  className = "",
}: {
  index: string;
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 flex items-baseline gap-2.5 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-slateink/65">
        <span className="tabular-nums text-orange">{index}</span>
        {label}
        {required && <span className="text-orange">*</span>}
      </span>
      {children}
    </label>
  );
}

/** Mũi tên tự vẽ: mũi tên mặc định của trình duyệt mỗi hệ điều hành một kiểu. */
function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink/45"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactCTA({ id = "lien-he" }: { id?: string } = {}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const endpoint = process.env.NEXT_PUBLIC_SHEET_ENDPOINT;
    const data = Object.fromEntries(new FormData(form));

    if (!endpoint) {
      // Chưa gắn Google Apps Script — ghi tạm ra console để kiểm tra dữ liệu.
      console.info("Dữ liệu form (chưa gắn endpoint):", data);
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id={id}
      data-header-light
      className="relative isolate scroll-mt-[88px] overflow-hidden bg-white py-24 text-slateink sm:py-32"
    >
      {/* Ảnh phủ kín section, phủ lớp mực dày để chữ và nét gạch chân nổi lên */}
      <Image
        src="/images/subbanner3.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-90 [mask-image:linear-gradient(90deg,#000_0%,#000_18%,rgba(0,0,0,.12)_46%,rgba(0,0,0,.12)_58%,#000_88%,#000_100%)]"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(62%_78%_at_15%_48%,rgba(255,255,255,.86)_0%,rgba(255,255,255,.5)_48%,rgba(255,255,255,0)_76%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,.8)_30%,rgba(255,255,255,.8)_72%,transparent_100%)]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-16 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
        {/* Cột trái: lời mời + đầu mối liên hệ, xếp thành khối chữ lớn */}
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-orange" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-slateink/60">
              Liên hệ
            </span>
          </div>

          <h2 className="mt-7 text-[40px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[52px] lg:text-[58px]">
            Trao đổi trực tiếp về{" "}
            <span className="grad-text-light">giải pháp tối ưu cho tổ chức bạn</span>
          </h2>

          <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-slateink/65">
            Để lại thông tin, đội ngũ FIS247 sẽ liên hệ tư vấn giải pháp phù hợp nhất — hoàn toàn
            miễn phí.
          </p>

          {/* Hai đầu mối liên hệ, ngăn nhau bằng nét kẻ mảnh thay vì khung */}
          <dl className="mt-12 border-t border-slateink/15">
            <div className="border-b border-slateink/15 py-6">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slateink/50">
                Hotline
              </dt>
              <dd className="mt-2">
                <a
                  href="tel:18006861"
                  className="text-[34px] font-extrabold tracking-tight transition-colors hover:text-orange sm:text-[40px]"
                >
                  1800 6861
                </a>
              </dd>
            </div>
            <div className="border-b border-slateink/15 py-6">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slateink/50">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href="mailto:fis247@fpt.com"
                  className="text-[26px] font-bold tracking-tight transition-colors hover:text-orange sm:text-[30px]"
                >
                  fis247@fpt.com
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* Cột phải: biểu mẫu, không khung bao — chỉ chữ và nét gạch chân */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <Field index="01" label="Công ty / Tổ chức" required className="sm:col-span-2">
              <input id="company" name="company" required className={FIELD} />
            </Field>

            <Field index="02" label="Họ & Tên" required className="sm:col-span-2">
              <input id="fullname" name="fullname" required className={FIELD} />
            </Field>

            <Field index="03" label="Job title" required>
              <div className="relative">
                <select id="jobTitle" name="jobTitle" required defaultValue="" className={SELECT}>
                  <option value="" disabled>
                    Chọn...
                  </option>
                  {JOB_TITLES.map((j) => (
                    <option key={j} value={j}>
                      {j}
                    </option>
                  ))}
                </select>
                <Chevron />
              </div>
            </Field>

            <Field index="04" label="Ngành nghề">
              <input id="industry" name="industry" className={FIELD} />
            </Field>

            <Field index="05" label="Điện thoại" required>
              <input id="phone" name="phone" type="tel" required className={FIELD} />
            </Field>

            <Field index="06" label="Email" required>
              <input id="email" name="email" type="email" required className={FIELD} />
            </Field>

            <Field index="07" label="Sản phẩm và dịch vụ quan tâm" required className="sm:col-span-2">
              <div className="relative">
                <select id="interest" name="interest" required defaultValue="" className={SELECT}>
                  <option value="" disabled>
                    Chọn...
                  </option>
                  {INTERESTS.map((it) => (
                    <option key={it} value={it}>
                      {it}
                    </option>
                  ))}
                </select>
                <Chevron />
              </div>
            </Field>

            <Field index="08" label="Mô tả nhu cầu" required className="sm:col-span-2">
              <textarea id="message" name="message" required rows={3} className={`${FIELD} resize-none`} />
            </Field>

            <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-3 sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-3 rounded-[6px] bg-orange px-9 py-[16px] text-[18px] font-semibold leading-tight text-white transition-colors hover:bg-orange-2 disabled:opacity-60"
              >
                {status === "sending" ? "Đang gửi..." : "Gửi thông tin"}
                <svg viewBox="0 0 20 20" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 10h13M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <p aria-live="polite" className="text-[15px] font-medium">
                {status === "sent" && (
                  <span className="text-emerald-600">Đã gửi. Chúng tôi sẽ liên hệ với bạn sớm nhất.</span>
                )}
                {status === "error" && (
                  <span className="text-red-600">Gửi chưa thành công. Vui lòng gọi 1800 6861.</span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

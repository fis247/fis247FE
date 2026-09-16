"use client";

import { useState, type FormEvent } from "react";
import { PhotoTile } from "./PhotoTile";
import { Reveal } from "./Reveal";

const JOB_TITLES = [
  "Giám đốc",
  "Giám đốc Khối / Trung tâm CNTT",
  "Cán bộ IT",
  "Quản lý / Cán bộ mua sắm",
  "Khác",
];

const INTERESTS = [
  "Dịch vụ bảo hành",
  "Dịch vụ bảo dưỡng, bảo trì",
  "Sửa chữa, thay thế linh kiện",
  "Di chuyển Data Center, phòng máy chủ",
  "Tư vấn quy trình ITSM",
  "Triển khai thiết bị chuyên dụng",
  "Dịch vụ cho thuê",
  "Sản phẩm AKA247 ServiceDesk",
  "FPT ATM Guard",
  "FPT IDReader",
  "Kiosk thông minh",
  "Robot dịch vụ",
  "Sản phẩm và dịch vụ khác",
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactCTA() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_SHEET_ENDPOINT;
    const data = Object.fromEntries(new FormData(e.currentTarget));

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
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-slateink/15 bg-white px-4 py-3 text-[14.5px] text-slateink outline-none transition placeholder:text-slateink/35 focus:border-orange focus:ring-2 focus:ring-orange/20";

  return (
    <section id="lien-he" className="relative overflow-hidden bg-white py-20 text-slateink sm:py-28">
      <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-orange/8 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="hidden lg:block">
          <PhotoTile seed={4} className="aspect-[4/5] w-full rounded-[28px]" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[28px] border border-orange/25 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(28,37,64,.35)] sm:p-10">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-[40px]">
              Kiến tạo tương lai,
              <br />
              <span className="grad-text-light">cùng nhau</span>
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-slateink/60">
              Để lại thông tin, đội ngũ FIS247 sẽ liên hệ tư vấn giải pháp phù hợp nhất cho tổ chức của bạn.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <input id="company" name="company" required placeholder="Công ty / Tổ chức *" className={field} />
              <input id="fullname" name="fullname" required placeholder="Họ và tên *" className={field} />

              <select id="jobTitle" name="jobTitle" required defaultValue="" className={field}>
                <option value="" disabled>
                  Chức danh *
                </option>
                {JOB_TITLES.map((j) => (
                  <option key={j} value={j}>
                    {j}
                  </option>
                ))}
              </select>
              <input id="industry" name="industry" placeholder="Ngành nghề" className={field} />

              <input id="phone" name="phone" type="tel" required placeholder="Điện thoại *" className={field} />
              <input id="email" name="email" type="email" required placeholder="Email *" className={field} />

              <select id="interest" name="interest" required defaultValue="" className={`${field} sm:col-span-2`}>
                <option value="" disabled>
                  Sản phẩm và dịch vụ quan tâm *
                </option>
                {INTERESTS.map((it) => (
                  <option key={it} value={it}>
                    {it}
                  </option>
                ))}
              </select>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Mô tả nhu cầu *"
                className={`${field} sm:col-span-2 resize-none`}
              />

              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-gradient-to-b from-orange-2 to-orange px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_36px_-12px_rgba(241,101,34,.85)] transition hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "sending" ? "Đang gửi..." : "Gửi thông tin"}
                </button>

                {status === "sent" && (
                  <p className="text-sm font-medium text-emerald-600">
                    Đã gửi. Chúng tôi sẽ liên hệ với bạn sớm nhất.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">
                    Gửi chưa thành công. Vui lòng thử lại hoặc gọi (028) 3981 2099.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

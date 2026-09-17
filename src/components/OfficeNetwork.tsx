"use client";

import { useMemo, useState } from "react";

import { OFFICES, OFFICE_PHONE, REGIONS, mapEmbedUrl, type Region } from "@/data/offices";
import { Reveal } from "./Reveal";
import { VietnamMap } from "./VietnamMap";

/**
 * Bỏ dấu để gõ "da nang" vẫn tìm ra "Đà Nẵng".
 * `đ` không phải chữ `d` có dấu nên NFD không tách ra được, phải thay riêng.
 */
function plain(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

export function OfficeNetwork() {
  const [region, setRegion] = useState<Region | "all">("all");
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(OFFICES[0].id);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: OFFICES.length };
    for (const o of OFFICES) c[o.region] = (c[o.region] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = plain(query.trim());
    return OFFICES.filter(
      (o) =>
        (region === "all" || o.region === region) &&
        (q === "" || plain(o.name).includes(q) || plain(o.address).includes(q)),
    );
  }, [region, query]);

  // Văn phòng đang chọn có thể bị lọc mất; khi đó hiện văn phòng đầu danh sách
  const active = filtered.find((o) => o.id === activeId) ?? filtered[0] ?? null;

  return (
    <section
      id="van-phong"
      data-header-light
      className="scroll-mt-[88px] bg-white py-20 text-slateink sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-orange" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-slateink/60">
              Mạng lưới
            </span>
          </div>

          <h2 className="mt-6 max-w-[20ch] text-[30px] font-bold leading-[1.18] tracking-tight sm:text-[40px] lg:text-[46px]">
            Hệ thống <span className="grad-text-light">văn phòng hỗ trợ</span>
          </h2>

          <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-slateink/65 sm:text-[18px]">
            FIS247 sở hữu hơn 50 văn phòng hỗ trợ trên toàn quốc, đảm bảo dịch vụ nhanh chóng, hiệu
            quả tại mọi tỉnh thành.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {/* Lọc theo miền */}
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((r) => {
              const on = region === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRegion(r.id)}
                  aria-pressed={on}
                  className={`rounded-[6px] px-5 py-3 text-[16px] font-semibold transition-colors ${
                    on
                      ? "bg-orange text-white"
                      : "bg-slateink/5 text-slateink/70 hover:bg-slateink/10"
                  }`}
                >
                  {r.label}
                  <span className={`ml-2 text-[14px] ${on ? "text-white/70" : "text-slateink/40"}`}>
                    {counts[r.id] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <VietnamMap offices={filtered} activeId={active?.id ?? null} onSelect={setActiveId} />

            {/* Cột trái: tìm kiếm + danh sách */}
            <div>
              <label className="relative block">
                <span className="sr-only">Tìm văn phòng theo tỉnh thành</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Tìm theo tỉnh thành..."
                  className="w-full border-0 border-b border-slateink/25 bg-transparent py-3 pl-8 pr-0 text-[16px] text-slateink outline-none transition-colors placeholder:text-slateink/35 focus:border-orange"
                />
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-slateink/40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
              </label>

              {filtered.length === 0 ? (
                <p className="mt-8 text-[16px] text-slateink/55">
                  Không tìm thấy văn phòng nào khớp với “{query}”.
                </p>
              ) : (
                // Danh sách cuộn riêng: 49 mục mà đổ hết ra sẽ đẩy bản đồ đi rất xa
                <ul className="hide-scrollbar mt-4 max-h-[460px] overflow-y-auto">
                  {filtered.map((o) => {
                    const on = active?.id === o.id;
                    return (
                      <li key={o.id}>
                        <button
                          type="button"
                          onClick={() => setActiveId(o.id)}
                          aria-current={on}
                          className={`w-full border-b border-slateink/10 py-4 pl-4 pr-2 text-left transition-colors ${
                            on
                              ? "border-l-2 border-l-orange bg-orange/5 text-slateink"
                              : "border-l-2 border-l-transparent text-slateink/70 hover:bg-slateink/5"
                          }`}
                        >
                          <span className={`block text-[16.5px] ${on ? "font-bold" : "font-medium"}`}>
                            {o.short}
                          </span>
                          <span className="mt-1 block text-[14px] leading-snug text-slateink/50">
                            {o.address}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Bản đồ đường phố của văn phòng đang chọn, lấp khoảng trống
                  dưới danh sách. Chỉ nạp khi cuộn tới nên không làm chậm trang. */}
              {active && (
                <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-xl bg-slateink/5">
                  <iframe
                    // key ép iframe dựng lại khi đổi văn phòng, nếu không lần
                    // quay lại sẽ hiện bản đồ trong bộ đệm của lượt trước
                    key={active.id}
                    src={mapEmbedUrl(active)}
                    title={`Bản đồ ${active.name}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              )}
            </div>

            {/* Thông tin văn phòng đang chọn */}
            {active && (
              <div className="border-t border-slateink/12 pt-8 lg:col-span-2">
                <h3 className="text-[22px] font-bold tracking-tight sm:text-[26px]">
                  {active.name}
                </h3>

                <dl className="mt-4 space-y-3 text-[16.5px]">
                  <div className="flex gap-3">
                    <dt className="shrink-0 font-semibold text-slateink/50">Địa chỉ:</dt>
                    <dd className="leading-relaxed text-slateink/75">{active.address}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="shrink-0 font-semibold text-slateink/50">Điện thoại bàn:</dt>
                    <dd>
                      <a href="tel:18006861" className="text-slateink/75 transition-colors hover:text-orange">
                        {OFFICE_PHONE}
                      </a>
                    </dd>
                  </div>
                </dl>

                <a
                  href={mapEmbedUrl(active).replace("&output=embed", "")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[16px] font-semibold text-orange transition-colors hover:text-orange-2"
                >
                  Xem trên Google Maps
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 13 13 7M8 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { CaseStudy } from "@/data/cases";
import { Reveal } from "./Reveal";

/** Một mục của hồ sơ: số viền rỗng bên trái, nội dung bên phải. */
function Block({
  no,
  title,
  children,
}: {
  no: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-x-8 gap-y-5 border-t border-white/12 py-12 sm:grid-cols-[auto_1fr] sm:gap-x-12">
      <div className="flex items-baseline gap-4 sm:block">
        <span
          aria-hidden
          className="text-[40px] font-extrabold leading-none tabular-nums text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.28)] sm:text-[56px]"
        >
          {no}
        </span>
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-orange sm:mt-4 sm:w-[12ch]">
          {title}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Bullets({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="space-y-4">
      {items.map((t) => (
        <li key={t} className="flex gap-4">
          <span
            aria-hidden
            className={`mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full ${
              accent ? "bg-orange" : "bg-navy-3"
            }`}
          />
          <span className="text-[16.5px] leading-[1.75] text-white/70 sm:text-[17.5px]">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseBody({ item }: { item: CaseStudy }) {
  return (
    <div className="bg-ink">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <Reveal>
          <Block no="01" title="Khách hàng">
            <p className="text-[18px] leading-[1.75] text-white/75 sm:text-[20px]">
              {item.khachHang}
            </p>
            {item.tenDuAn && (
              <p className="mt-7 border-l-2 border-orange pl-5 text-[17px] font-bold leading-snug text-white sm:text-[19px]">
                {item.tenDuAn}
              </p>
            )}
          </Block>
        </Reveal>

        {item.baiToan.length > 0 && (
          <Reveal>
            <Block no="02" title="Bài toán">
              <Bullets items={item.baiToan} />
            </Block>
          </Reveal>
        )}

        {item.giaiPhap.length > 0 && (
          <Reveal>
            <Block no="03" title="Giải pháp">
              <Bullets items={item.giaiPhap} />
            </Block>
          </Reveal>
        )}

        {item.ketQua.length > 0 && (
          <Reveal>
            <Block no="04" title="Kết quả">
              {/* Phần kết quả là nơi duy nhất có số liệu, nên tô cam cho nổi */}
              <Bullets items={item.ketQua} accent />
            </Block>
          </Reveal>
        )}
      </div>
    </div>
  );
}

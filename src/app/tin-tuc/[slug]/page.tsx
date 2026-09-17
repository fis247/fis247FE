import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseBody } from "@/components/CaseBody";
import { CASES, catLabel } from "@/data/cases";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} — FIS247`,
    // Đoạn giới thiệu khách hàng là phần mô tả sát nghĩa nhất của mỗi hồ sơ
    description: c.khachHang.slice(0, 180),
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = CASES.find((c) => c.slug === slug);
  if (!item) notFound();

  const index = CASES.findIndex((c) => c.slug === slug);
  const next = CASES[(index + 1) % CASES.length];

  return (
    <>
      <section className="relative isolate flex min-h-[54vh] items-end overflow-hidden pb-14 pt-[124px] sm:min-h-[58vh]">
        <Image
          src={item.image}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8">
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-[15px] text-white/70">
            <Link href="/tin-tuc" className="transition-colors hover:text-orange">
              Tin tức
            </Link>
            <span aria-hidden className="text-white/35">
              /
            </span>
            <span className="text-orange">{catLabel(item.cat)}</span>
          </nav>

          <h1 className="mt-5 max-w-[24ch] text-balance text-[30px] font-extrabold leading-[1.12] tracking-tight [text-shadow:0_2px_16px_rgba(0,0,0,.6)] sm:text-[44px] lg:text-[54px]">
            {item.title}
          </h1>
        </div>
      </section>

      <CaseBody item={item} />

      <section className="bg-ink pb-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <Link
            href={`/tin-tuc/${next.slug}`}
            className="group flex flex-col gap-2 border-t border-white/12 pt-10"
          >
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Dự án tiếp theo
            </span>
            <span className="text-balance text-[22px] font-bold leading-snug tracking-tight transition-colors group-hover:text-orange sm:text-[28px]">
              {next.title}
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

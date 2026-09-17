import Image from "next/image";
import Link from "next/link";

import { HeroVideo } from "./HeroVideo";

/** Hero dùng chung cho các trang con: ảnh nền + đường dẫn + tiêu đề. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  video,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  /** Dùng video nền thay ảnh; `image` khi đó đóng vai trò ảnh poster */
  video?: string;
  /** Hero thấp hơn, dùng cho trang mà nội dung mới là phần chính */
  compact?: boolean;
}) {
  return (
    <section
      data-hero
      className={`relative isolate flex items-end overflow-hidden ${
        compact
          ? "min-h-[42vh] pb-12 pt-[124px] sm:min-h-[46vh] sm:pb-14"
          : "min-h-[62vh] pb-16 pt-[136px] sm:min-h-[68vh] sm:pb-20"
      }`}>
      {video ? (
        <HeroVideo
          src={video}
          poster={image}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      ) : (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="-z-20 object-cover"
        />
      )}
      {/* Tối dần về đáy để chữ tách khỏi ảnh mà ảnh vẫn còn nhìn được */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,13,31,.8)_0%,rgba(6,13,31,.45)_38%,transparent_65%)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-[16px] text-white/75 [text-shadow:0_2px_10px_rgba(0,0,0,.6)]">
          <Link href="/" className="transition-colors hover:text-orange">
            Trang chủ
          </Link>
          <span aria-hidden className="text-white/30">
            /
          </span>
          <span className="text-white">{eyebrow}</span>
        </nav>

        <h1
          className={`grad-head mt-5 max-w-[16ch] font-extrabold leading-[1.06] tracking-[-0.02em] ${
            compact
              ? "text-[42px] sm:text-[58px] lg:text-[68px]"
              : "text-[54px] sm:text-[78px] lg:text-[96px]"
          }`}
        >
          {title}
        </h1>

        <p
          className={`mt-6 max-w-[54ch] leading-relaxed text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,.65)] ${
            compact ? "text-[17px] sm:text-[19px]" : "text-[19px] sm:text-[23px]"
          }`}
        >
          {lead}
        </p>
      </div>
    </section>
  );
}

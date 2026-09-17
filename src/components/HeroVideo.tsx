"use client";

import { useEffect, useState } from "react";

/**
 * Video nền cho hero. Máy bật *giảm chuyển động* thì chỉ hiện ảnh tĩnh —
 * video nền chạy vô tận là đúng thứ tuỳ chọn đó muốn tắt.
 */
export function HeroVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!motion) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" aria-hidden className={className} />;
  }

  return (
    <video
      // autoplay chỉ được phép khi không có tiếng và phát ngay trong trang;
      // thiếu `muted` hoặc `playsInline` là iOS chặn, màn hình sẽ trống trơn
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
      tabIndex={-1}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const DURATION = 7000;

const SLIDES = [
  {
    image: "/images/banner2.jpg",
    alt: "Trung tâm điều hành FIS247 với đội ngũ giám sát hệ thống",
    label: "Trung tâm điều hành",
    title: "Vận hành liên tục,\nkhông gián đoạn",
    sub: "Chúng tôi giám sát hạ tầng CNTT của bạn suốt ngày đêm và xử lý sự cố trước khi nó kịp ảnh hưởng đến hoạt động kinh doanh.",
  },
  {
    image: "/images/banner3.jpg",
    alt: "Kỹ sư FIS247 thao tác trên tủ rack trong phòng máy chủ",
    label: "Hạ tầng & Data Center",
    title: "Từ phòng máy chủ\nđến toàn hệ thống",
    sub: "Bảo trì, giám sát và di chuyển trung tâm dữ liệu theo quy trình kiểm soát rủi ro chặt chẽ, hạn chế tối đa thời gian dừng.",
  },
  {
    image: "/images/banner1.jpg",
    alt: "Kỹ thuật viên FIS247 bảo trì thiết bị kiosk ngân hàng",
    label: "Thiết bị chuyên dụng ngân hàng",
    title: "Đạt chuẩn an toàn\ncủa ngành tài chính",
    sub: "ATM Guard, IDReader, Kiosk thông minh — thiết bị và dịch vụ kỹ thuật cho từng điểm giao dịch của bạn.",
  },
  {
    image: "/images/banner4.jpg",
    alt: "Đội kỹ thuật FIS247 lắp đặt thiết bị mạng tại điểm triển khai",
    label: "Triển khai & IT Onsite",
    title: "Kỹ thuật có mặt\nở 63 tỉnh thành",
    sub: "Đội ngũ tại chỗ lắp đặt, sửa chữa và hỗ trợ vận hành với thời gian phản hồi cam kết theo SLA.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (i: number) => setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(id);
  }, [index]);

  const slide = SLIDES[index];

  return (
    <section id="top" data-hero className="relative flex min-h-[88vh] items-center overflow-hidden pt-[88px]">
      {/* Photography */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: "linear" } }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Scrim: heavy on the left where the words live, clearing to the right
          so the photograph still reads as a photograph. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/35 lg:via-ink/78 lg:to-transparent" />
      <div className="absolute inset-0 bg-ink/45 lg:bg-ink/15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8">
        <div className="max-w-[680px] lg:max-w-[740px] xl:max-w-[860px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.55, ease: [0.22, 0.7, 0.2, 1] }}
            >
              {/* Eyebrow: a rule, not a badge */}
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-orange" />
                <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/75">
                  {slide.label}
                </span>
              </div>

              {/* leading phải đủ rộng: chữ tô gradient chỉ hiện trong khung dòng,
                  bó sát quá thì dấu thanh và dấu nặng tiếng Việt bị cắt mất */}
              <h1 className="grad-head mt-7 whitespace-pre-line text-[40px] font-extrabold leading-[1.18] tracking-[-0.02em] sm:text-[56px] lg:text-[66px] xl:text-[78px]">
                {slide.title}
              </h1>

              <p className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-white/75 sm:text-[20px]">
                {slide.sub}
              </p>

            </motion.div>
          </AnimatePresence>

          {/* Slide index + progress — says which of how many, and how long is left */}
          <div className="mt-16 flex items-center gap-6">
            <span className="text-[13px] font-semibold tabular-nums text-white/85">
              {String(index + 1).padStart(2, "0")}
              <span className="text-white/35"> / {String(SLIDES.length).padStart(2, "0")}</span>
            </span>

            <div className="flex flex-1 gap-2 sm:max-w-[320px]">
              {SLIDES.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Chuyển tới ${s.label}`}
                  aria-current={i === index}
                  className="group relative h-4 flex-1"
                >
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-white/20 transition-colors group-hover:bg-white/40" />
                  {i < index && (
                    <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-white/50" />
                  )}
                  {i === index && (
                    <motion.span
                      key={`fill-${index}`}
                      className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-orange"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: DURATION / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

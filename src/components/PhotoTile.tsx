import Image from "next/image";

/**
 * Stand-in for a real photograph. Drop a file into /public/images and pass
 * `src` to swap any tile over to the real asset — the layout stays identical.
 */
export function PhotoTile({
  src,
  alt = "",
  label,
  seed = 0,
  className = "",
  sizes = "(max-width: 768px) 100vw, 420px",
}: {
  src?: string;
  alt?: string;
  label?: string;
  seed?: number;
  className?: string;
  /** Tell next/image how wide the tile really renders, so it ships the right file. */
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  const palettes = [
    "from-navy via-navy-2 to-ink-3",
    "from-ink-3 via-navy to-orange/60",
    "from-orange/70 via-navy-2 to-ink-2",
    "from-navy-2 via-ink-3 to-navy",
    "from-ink-2 via-navy to-navy-3/70",
    "from-orange/50 via-ink-3 to-navy-2",
  ];
  const tone = palettes[seed % palettes.length];

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`}
      aria-hidden={!label}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:14px_14px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      {label && (
        <span className="absolute bottom-3 left-3 rounded-md border border-white/20 bg-black/35 px-2 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}

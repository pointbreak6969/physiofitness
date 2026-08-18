"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((i) => ((i ?? 0) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, images.length]);

  return (
    <>
      <div className="columns-2 sm:columns-3 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightbox(i)}
            className="relative w-full mb-4 overflow-hidden rounded-[14px] cursor-zoom-in block border border-brand-line"
            aria-label={`Open photo ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Physiofitness clinic photo ${i + 1}`}
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white text-[28px] leading-none w-10 h-10 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => ((i ?? 0) - 1 + images.length) % images.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-[36px] leading-none w-11 h-11 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-5xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`Physiofitness clinic photo ${lightbox + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => ((i ?? 0) + 1) % images.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-[36px] leading-none w-11 h-11 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next photo"
          >
            ›
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-[13px]">
            {lightbox + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function ImageView({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const preview =
    mounted && hover && !open
      ? createPortal(
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="pointer-events-none fixed left-1/2 top-1/2 z-[70] max-h-[78vh] w-[min(920px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl object-contain shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
          />,
          document.body,
        )
      : null;

  const dialog =
    mounted && open
      ? createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-[#0b0b0c]/88 px-4 pb-28 pt-20"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 min-h-12 rounded-full bg-white px-4 text-sm font-medium text-black"
              onClick={() => setOpen(false)}
            >
              Cerrar
            </button>
            <img src={src} alt={alt} className="max-h-[calc(100dvh-11rem)] w-auto max-w-full object-contain" />
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onMouseEnter={() => {
          if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        className="block w-full cursor-zoom-in text-left"
        aria-label={`Ver ${alt}`}
      >
        <img src={src} alt={alt} className={className} draggable={false} />
      </button>
      {preview}
      {dialog}
    </>
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Hotspot } from "@/data/portfolioData";

export function HardwareBreakdown({
  shot,
  alt,
  hotspots,
}: {
  shot: string;
  alt: string;
  hotspots: Hotspot[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(hotspots[0]?.id ?? "");
  const reduce = useReducedMotion();
  const spot = hotspots.find((item) => item.id === active) ?? hotspots[0];

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="grid grid-cols-2 gap-1 rounded-full border border-white/15 bg-white/[0.05] p-1" role="group" aria-label="Vista del dispositivo">
        <button
          type="button"
          aria-pressed={!open}
          onClick={() => setOpen(false)}
          className={`min-h-12 rounded-full px-3 text-sm ${open ? "text-mute" : "bg-white text-black"}`}
        >
          Vista de producto
        </button>
        <button
          type="button"
          aria-pressed={open}
          onClick={() => setOpen(true)}
          className={`min-h-12 rounded-full px-3 text-sm ${open ? "bg-white text-black" : "text-mute"}`}
        >
          Cómo está hecha
        </button>
      </div>

      <div className="relative mt-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-16 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "var(--glow)" }}
        />
        <motion.div
          className="chassis relative z-10 mx-auto w-[min(220px,62vw)] overflow-hidden rounded-[1.7rem] border border-white/25 p-[5px]"
          style={{ background: "var(--chassis)", boxShadow: "0 0 28px var(--glow)" }}
          animate={{ y: open ? -4 : 0 }}
          transition={reduce ? { duration: 0.01 } : { type: "spring", stiffness: 260, damping: 24 }}
        >
          <img src={shot} alt={alt} className="aspect-[9/16] w-full rounded-[1.35rem] object-cover object-top" draggable={false} />
          {open
            ? hotspots.map((item, index) => {
                const selected = item.id === spot?.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={selected}
                    aria-label={item.title}
                    onClick={() => setActive(item.id)}
                    className="absolute z-10 h-11 w-11 -translate-x-1/2 -translate-y-1/2"
                    style={{ top: item.top, left: item.left }}
                  >
                    {selected && !reduce ? (
                      <motion.span
                        className="absolute inset-0 rounded-full border-2 border-white"
                        animate={{ scale: [1, 1.7], opacity: [0.85, 0] }}
                        transition={{ duration: 1.3, repeat: Infinity, ease: "easeOut" }}
                      />
                    ) : null}
                    <motion.span
                      className="absolute left-1/2 top-1/2 rounded-full bg-white"
                      animate={{
                        width: selected ? 22 : 12,
                        height: selected ? 22 : 12,
                        x: "-50%",
                        y: "-50%",
                        opacity: selected ? 1 : 0.45,
                      }}
                      transition={reduce ? { duration: 0.01 } : { type: "spring", stiffness: 420, damping: 22 }}
                      style={{ boxShadow: selected ? "0 0 16px rgba(255,255,255,0.85)" : "none" }}
                    />
                    <span className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-semibold ${selected ? "text-black" : "text-transparent"}`}>
                      {index + 1}
                    </span>
                  </button>
                );
              })
            : null}
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && spot ? (
          <motion.div
            key="explainer"
            className="mt-4"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 6 }}
            transition={{ duration: 0.22 }}
          >
            <div className="flex gap-2" role="tablist" aria-label="Partes de la app">
              {hotspots.map((item, index) => {
                const selected = item.id === spot.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(item.id)}
                    className={`min-h-11 flex-1 rounded-full px-2 text-[13px] ${selected ? "bg-white font-semibold text-black" : "border border-white/15 text-mute"}`}
                  >
                    {index + 1}. {item.title}
                  </button>
                );
              })}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={spot.id}
                className="mt-3 text-sm leading-relaxed text-ink"
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
              >
                {spot.detail}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

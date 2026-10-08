"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Benchmark } from "@/data/portfolioData";

export function PerformanceMetricBars({ benchmark }: { benchmark: Benchmark }) {
  const [side, setSide] = useState<"before" | "after">("after");
  const reduce = useReducedMotion();

  return (
    <div className="ambient glass rounded-3xl p-6 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-mute">Comparación</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{benchmark.label}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">{benchmark.caption}</p>
        </div>
        <div className="grid grid-cols-2 gap-1 rounded-full border border-white/15 p-1" role="group" aria-label="Comparar versiones">
          <button
            type="button"
            aria-pressed={side === "before"}
            onClick={() => setSide("before")}
            className={`min-h-12 rounded-full px-4 text-sm ${side === "before" ? "bg-white text-black" : "text-mute"}`}
          >
            {benchmark.beforeLabel}
          </button>
          <button
            type="button"
            aria-pressed={side === "after"}
            onClick={() => setSide("after")}
            className={`min-h-12 rounded-full px-4 text-sm ${side === "after" ? "bg-white text-black" : "text-mute"}`}
          >
            {benchmark.afterLabel}
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Bar
          label={benchmark.beforeLabel}
          note={benchmark.beforeNote}
          value={benchmark.before}
          active={side === "before"}
          reduce={Boolean(reduce)}
        />
        <Bar
          label={benchmark.afterLabel}
          note={benchmark.afterNote}
          value={benchmark.after}
          active={side === "after"}
          reduce={Boolean(reduce)}
        />
      </div>
    </div>
  );
}

function Bar({
  label,
  note,
  value,
  active,
  reduce,
}: {
  label: string;
  note: string;
  value: number;
  active: boolean;
  reduce: boolean;
}) {
  return (
    <div className={active ? "opacity-100" : "opacity-70"}>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm text-mute">{label}</p>
        <p className="text-sm font-semibold text-ink">{note}</p>
      </div>
      <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: active ? "var(--glow)" : "rgba(255,255,255,0.45)", boxShadow: active ? "0 0 18px var(--glow)" : undefined }}
          initial={{ width: reduce ? `${value}%` : "0%" }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={reduce ? { duration: 0.01 } : { type: "spring", stiffness: 120, damping: 18 }}
        />
      </div>
    </div>
  );
}

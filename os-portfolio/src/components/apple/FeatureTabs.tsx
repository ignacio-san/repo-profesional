"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { DeviceMockup } from "@/components/apple/DeviceMockup";
import type { ProjectFeature } from "@/data/portfolioData";

const DWELL_MS = 7000;

export function FeatureTabs({
  features,
  deviceType,
  shot,
  paused,
  fallback,
  onSelectShot,
}: {
  features: ProjectFeature[];
  deviceType: "macbook" | "iphone";
  shot: string;
  paused: boolean;
  fallback: string;
  onSelectShot: (src: string, source: "auto" | "user") => void;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const feature = features.find((item) => item.shot === shot);

  useEffect(() => {
    if (paused || reduce || features.length < 2) return;
    const timer = window.setTimeout(() => {
      const next = (index + 1) % features.length;
      setIndex(next);
      onSelectShot(features[next].shot, "auto");
    }, DWELL_MS);
    return () => window.clearTimeout(timer);
  }, [features, index, onSelectShot, paused, reduce]);

  function choose(next: number) {
    setIndex(next);
    onSelectShot(features[next].shot, "user");
  }

  return (
    <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
      <div className="relative z-10 min-w-0">
        <div className="grid gap-2" role="tablist" aria-label="Funciones">
          {features.map((item, itemIndex) => {
            const selected = item.shot === shot;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => choose(itemIndex)}
                className="relative min-h-12 w-full rounded-2xl border border-white/10 px-4 py-3 text-left text-sm"
              >
                <span className={selected ? "font-semibold text-ink" : "text-mute"}>{item.label}</span>
                {selected && !paused && !reduce ? (
                  <span className="absolute inset-x-3 bottom-2 h-0.5 overflow-hidden rounded-full bg-white/15">
                    <motion.span
                      key={`${item.id}-${index}`}
                      className="block h-full origin-left bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: DWELL_MS / 1000, ease: "linear" }}
                    />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-mute">
          {feature ? feature.detail : fallback}
        </p>
      </div>

      <div className="relative z-0 mx-auto min-w-0 w-full max-w-4xl">
        <DeviceMockup src={shot} alt={feature?.label ?? fallback} deviceType={deviceType} />
      </div>
    </div>
  );
}

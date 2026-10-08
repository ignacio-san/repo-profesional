"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SpotlightWrapper({ children }: { children: ReactNode }) {
  const spot = useRef<HTMLDivElement>(null);
  const fine = useRef(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => {
      fine.current = query.matches;
      if (spot.current) spot.current.style.opacity = query.matches ? "1" : "0";
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!fine.current || !spot.current) return;
    const spotColor = getComputedStyle(document.documentElement).getPropertyValue("--spot").trim() || "rgba(29, 78, 216, 0.18)";
    spot.current.style.background = `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, ${spotColor}, transparent 80%)`;
  }

  return (
    <div onMouseMove={onMouseMove}>
      <div
        ref={spot}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 opacity-0"
        style={{ background: "radial-gradient(600px at 50% 20%, var(--spot), transparent 80%)" }}
      />
      {children}
    </div>
  );
}

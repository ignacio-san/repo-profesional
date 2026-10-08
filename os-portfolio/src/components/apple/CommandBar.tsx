"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { featuredProjects, personal } from "@/data/portfolioData";

const shortName: Record<string, string> = {
  "club-leon": "App",
  tienda: "Tienda",
  memobit: "MEMOBIT",
  concesiones: "POS",
};

export function CommandBar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <div className="fixed inset-x-0 bottom-3 z-50 flex justify-center pl-14 pr-3 md:px-3">
      <div className="ambient glass w-full max-w-3xl rounded-full px-2 py-2">
        <div className="mb-1 h-0.5 overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full origin-left bg-white" style={{ scaleX: progress }} />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto snap-x snap-mandatory" aria-label="Proyectos">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id === featuredProjects[0].id ? "trabajo" : project.id}`}
                className="shrink-0 snap-start rounded-full px-3 py-2 text-[13px] text-mute hover:text-ink"
              >
                {shortName[project.id] ?? project.name}
              </a>
            ))}
          </div>
          <motion.a
            href={personal.cvUrl}
            download="Ignacio_Sanchez_CV.pdf"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-apple px-4 text-sm font-medium text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <DownloadIcon />
            Descargar CV
          </motion.a>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      whileHover={{ y: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 16 }}
    >
      <path d="M8 2.5v7" strokeLinecap="round" />
      <path d="M5.2 7.2 8 10l2.8-2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 13h9" strokeLinecap="round" />
    </motion.svg>
  );
}

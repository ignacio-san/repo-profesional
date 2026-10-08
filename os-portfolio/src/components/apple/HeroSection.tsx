"use client";

import { motion, useReducedMotion } from "framer-motion";
import { featuredProjects, personal } from "@/data/portfolioData";
import { ProjectMockup } from "@/components/apple/ProjectMockup";

export function HeroSection() {
  const reduce = useReducedMotion();
  const star = featuredProjects[0];
  const enter = reduce ? undefined : { y: 28, scale: 0.98 };
  const shown = { y: 0, scale: 1 };

  return (
    <section id="inicio" className="px-6 pb-20 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.p
          className="text-[13px] font-medium uppercase tracking-[0.18em] text-mute"
          initial={enter}
          animate={shown}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          Ignacio Sánchez · Software Engineer
        </motion.p>
        <motion.h1
          className="mt-5 max-w-4xl bg-gradient-to-r from-blue-300 via-indigo-100 to-white bg-clip-text pb-1 text-5xl font-semibold leading-[0.95] tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          initial={enter}
          animate={shown}
          transition={{ type: "spring", stiffness: 200, damping: 26, delay: 0.04 }}
        >
          Construyendo software que vive en producción.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mute md:text-xl"
          initial={enter}
          animate={shown}
          transition={{ type: "spring", stiffness: 200, damping: 26, delay: 0.08 }}
        >
          Ingeniero de software especializado en aplicaciones móviles de alto rendimiento, plataformas web y arquitecturas escalables. De la idea al despliegue en tiendas y servidores reales.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={enter}
          animate={shown}
          transition={{ type: "spring", stiffness: 200, damping: 26, delay: 0.1 }}
        >
          <a href="#trabajo" className="inline-flex min-h-12 items-center rounded-full bg-apple px-5 text-sm font-medium text-white">
            Explorar Proyectos
          </a>
          <a
            href={personal.cvUrl}
            download="Ignacio_Sanchez_CV.pdf"
            className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-5 text-sm text-ink"
          >
            Descargar CV
          </a>
        </motion.div>
        <motion.div
          className="relative mt-12"
          initial={enter}
          animate={shown}
          transition={{ type: "spring", stiffness: 180, damping: 24, delay: 0.12 }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-70"
            style={{ background: "var(--glow)" }}
          />
          <ProjectMockup src={star.mockupUrl} alt={star.name} frame={star.frame} emphasis interactive={false} />
        </motion.div>
      </div>
    </section>
  );
}

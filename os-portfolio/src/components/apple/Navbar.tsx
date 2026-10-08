"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolioData";

const links = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#oficio", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#inicio" className="text-sm font-semibold tracking-tight text-ink" aria-label={personal.name}>
          IS
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Secciones">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[13px] text-mute transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <motion.a
            href={personal.cvUrl}
            download="Ignacio_Sanchez_CV.pdf"
            className="rounded-full bg-apple px-4 py-2 text-[13px] font-medium text-white md:px-5"
            whileHover={{ scale: 1.03, backgroundColor: "#0077ed" }}
            whileTap={{ scale: 0.98 }}
          >
            Descargar CV
          </motion.a>
          <button
            type="button"
            className="rounded-full border border-white/15 px-3 py-2 text-[13px] text-ink md:hidden"
            aria-expanded={open}
            aria-controls="nav-panel"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="nav-panel" className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden" aria-label="Secciones">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-3 py-3 text-base text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

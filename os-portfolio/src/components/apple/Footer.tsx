"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolioData";

const socials = [
  { href: `mailto:${personal.email}`, label: "Correo" },
  { href: personal.whatsappUrl, label: "WhatsApp" },
  { href: personal.githubUrl, label: "GitHub" },
  { href: personal.linkedinUrl, label: "LinkedIn" },
].filter((item) => item.href);

export function Footer() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Proyecto — ${name || "Portafolio"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name || "Sin nombre"}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  }

  return (
    <footer id="contacto" className="scroll-mt-16 border-t border-white/10 px-4 py-28 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Creemos algo extraordinario juntos.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink">
          {personal.name} · {personal.location}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-mute">{personal.availability}</p>
        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-lg space-y-3 text-left">
          <label className="block text-sm text-mute" htmlFor="contact-name">
            Nombre
            <input
              id="contact-name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              className="mt-1.5 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-ink outline-none"
            />
          </label>
          <label className="block text-sm text-mute" htmlFor="contact-message">
            Mensaje
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-1.5 w-full resize-y rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-ink outline-none"
            />
          </label>
          <motion.button
            type="submit"
            className="rounded-full bg-apple px-6 py-3 text-sm font-medium text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Escribir a {personal.email}
          </motion.button>
        </form>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-ink"
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {item.label}
            </a>
          ))}
          <a href={personal.phoneHref} className="rounded-full border border-white/15 px-4 py-2 text-sm text-ink">
            {personal.phone}
          </a>
          <a
            href={personal.cvUrl}
            download="Ignacio_Sanchez_CV.pdf"
            className="rounded-full bg-apple px-4 py-2 text-sm font-medium text-white"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </footer>
  );
}

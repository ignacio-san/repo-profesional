"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FeaturedProject } from "@/data/portfolioData";
import { FeatureTabs } from "@/components/apple/FeatureTabs";
import { HardwareBreakdown } from "@/components/apple/HardwareBreakdown";
import { ProjectMockup } from "@/components/apple/ProjectMockup";

const shotNotes: Record<string, { title: string; detail: string }> = {
  "/media/club/splash.jpg": { title: "Arranque", detail: "La app abre con la marca del club." },
  "/media/club/bienvenida.jpg": { title: "Bienvenida", detail: "El primer acceso presenta la app al aficionado." },
  "/media/club/privacidad.jpg": { title: "Privacidad", detail: "El aviso aparece antes de usar la cuenta." },
  "/media/club/notificaciones.jpg": { title: "Avisos", detail: "El socio activa las alertas de partido." },
  "/media/club/cuenta.jpg": { title: "Cuenta", detail: "Perfil y acceso del aficionado." },
  "/media/club/inicio.jpg": { title: "Inicio", detail: "El próximo partido, boletos y noticias en una sola pantalla." },
  "/media/club/recorrido.jpg": { title: "Recorrido", detail: "Una guía corta de lo que hay en la app." },
  "/media/club/calendario.jpg": { title: "Calendario", detail: "Las fechas del primer equipo." },
  "/media/club/calendario-femenino.jpg": { title: "Femenil", detail: "El calendario de la rama femenil." },
  "/media/club/clasificacion.jpg": { title: "Tabla", detail: "La posición del equipo en el torneo." },
  "/media/club/clasificacion-femenino.jpg": { title: "Tabla femenil", detail: "La clasificación de la rama femenil." },
  "/media/club/plantilla.jpg": { title: "Plantilla", detail: "La convocatoria del primer equipo." },
  "/media/club/plantilla-femenino.jpg": { title: "Plantilla femenil", detail: "Las jugadoras del equipo femenil." },
  "/media/club/rewards.jpg": { title: "Beneficios", detail: "Recompensas y ventajas del socio." },
  "/media/club/tienda.jpg": { title: "Tienda", detail: "El catálogo oficial dentro de la app." },
  "/media/club/carrito.jpg": { title: "Carrito", detail: "La compra sigue dentro de la misma app." },
  "/media/club/app-store.jpg": { title: "App Store", detail: "La ficha publicada para descargarla." },
  "/media/tienda/hero.jpg": { title: "Portada", detail: "La tienda oficial abre con la camiseta del club." },
  "/media/tienda/lineas.jpg": { title: "Líneas", detail: "El catálogo se recorre por tipo de prenda." },
  "/media/tienda/categorias.jpg": { title: "Categorías", detail: "Hombre, mujer y niño en el mismo menú." },
  "/media/tienda/vitrina.jpg": { title: "Vitrina", detail: "Las prendas destacadas antes de entrar al detalle." },
  "/media/tienda/catalogo.jpg": { title: "Catálogo", detail: "Búsqueda y filtros sin salir de la tienda." },
  "/media/tienda/busqueda.jpg": { title: "Búsqueda", detail: "El aficionado encuentra la prenda por nombre." },
  "/media/tienda/producto.jpg": { title: "Producto", detail: "Foto, talla y precio en la misma ficha." },
  "/media/tienda/personalizacion.jpg": { title: "Personalización", detail: "Nombre y número sobre la camiseta." },
  "/media/tienda/carrito.jpg": { title: "Carrito", detail: "La compra se conserva aunque cambie la sesión." },
  "/media/tienda/checkout.jpg": { title: "Pago", detail: "Stripe confirma el cobro antes de cerrar la orden." },
  "/media/tienda/acceso.jpg": { title: "Acceso", detail: "Entrar con Google, Apple o como invitado." },
  "/media/tienda/perfil.jpg": { title: "Perfil", detail: "Datos y pedidos de la cuenta." },
  "/media/tienda/recomendaciones.jpg": { title: "Recomendados", detail: "Otras prendas junto al producto elegido." },
  "/media/tienda/pedidos.jpg": { title: "Pedidos", detail: "El estado de cada compra ya hecha." },
  "/media/tienda/probador.jpg": { title: "Probador", detail: "La prenda se ve puesta antes de comprarla." },
  "/media/tienda/probador-resultado.jpg": { title: "Resultado", detail: "La vista del probador con la camiseta aplicada." },
  "/media/tienda/terminos.jpg": { title: "Términos", detail: "Las condiciones de compra, a la vista." },
  "/media/memobit/inicio.jpg": { title: "Inicio", detail: "La partida arranca sin esperar anuncios." },
  "/media/memobit/acerca.jpg": { title: "Acerca", detail: "Qué es el juego y cómo se juega." },
  "/media/memobit/opciones.jpg": { title: "Opciones", detail: "Sonido y ajustes fuera de la partida." },
  "/media/memobit/categorias-emojis.png": { title: "Emojis", detail: "Una categoría para desbloquear." },
  "/media/memobit/categorias-animales.png": { title: "Animales", detail: "Otra baraja, con su propia dificultad." },
  "/media/memobit/categorias-niveles.png": { title: "Niveles", detail: "El progreso se guarda por categoría." },
  "/media/memobit/fantasias-nivel.jpg": { title: "Fantasías", detail: "El nivel 1 de esa categoría." },
  "/media/memobit/emojis-tiempo.png": { title: "Tiempo", detail: "La partida corre contra el reloj." },
  "/media/memobit/emojis-revelado.jpg": { title: "Memoria", detail: "Las cartas se muestran un instante." },
  "/media/memobit/emojis-pareja.jpg": { title: "Pareja", detail: "Acertar suma y sigue la ronda." },
  "/media/memobit/emojis-pausa.png": { title: "Pausa", detail: "Se puede detener sin perder la partida." },
  "/media/memobit/emojis-estrellas.png": { title: "Estrellas", detail: "El tiempo define cuántas estrellas ganas." },
  "/media/memobit/animales-partida.jpg": { title: "Animales", detail: "La misma mecánica, con otra baraja." },
  "/media/memobit/animales-pareja.jpg": { title: "Acierto", detail: "La pareja encontrada se queda visible." },
  "/media/memobit/animales-revelado.jpg": { title: "Revelado", detail: "El tablero se enseña al empezar." },
  "/media/memobit/animales-estrellas.png": { title: "Resultado", detail: "Estrellas al cerrar el nivel." },
  "/media/memobit/app-store.jpg": { title: "Tiendas", detail: "Publicado con calificación de 5.0 en App Store." },
  "/media/concesiones/inicio.jpg": { title: "Palcos", detail: "El servicio abre con el partido y la guía del pedido." },
  "/media/concesiones/restaurantes.jpg": { title: "Concesiones", detail: "Ocho establecimientos activos en el estadio." },
  "/media/concesiones/concesiones.jpg": { title: "Menús", detail: "Cada local muestra su precio de entrada." },
  "/media/concesiones/cinepolis.jpg": { title: "Carta", detail: "Los productos se agregan desde el palco." },
  "/media/concesiones/agregado.jpg": { title: "Agregado", detail: "El carrito confirma el producto al momento." },
  "/media/concesiones/contacto.png": { title: "Contacto", detail: "Nombre, correo y teléfono de quien recibe." },
  "/media/concesiones/horario.png": { title: "Horario", detail: "La entrega se programa antes del partido." },
  "/media/concesiones/orden.png": { title: "Orden", detail: "Cantidad y nota para cocina en cada producto." },
  "/media/concesiones/comentario.png": { title: "Nota", detail: "El comentario viaja con la comanda." },
  "/media/concesiones/stripe.png": { title: "Stripe", detail: "El cobro de la preventa sale de la app." },
  "/media/concesiones/validando.png": { title: "Cocina", detail: "El pago se valida y se avisa al local." },
  "/media/concesiones/confirmado.jpg": { title: "Confirmado", detail: "El pedido queda programado para el palco." },
  "/media/concesiones/guia.png": { title: "Guía", detail: "El código sirve para seguir la entrega." },
  "/media/concesiones/estatus.jpg": { title: "Estatus", detail: "De pagado a entregado, en la misma pantalla." },
  "/media/concesiones/resumen.png": { title: "Resumen", detail: "Zona, palco y el total del pedido." },
  "/media/concesiones/correo.png": { title: "Correo", detail: "La preventa pagada llega con la ventana de entrega." },
  "/media/concesiones/correo-guia.png": { title: "Comprobante", detail: "La guía y el desglose quedan en el correo." },
};

function cardOffset(scroller: HTMLElement, card: HTMLElement) {
  const scrollerBox = scroller.getBoundingClientRect();
  const cardBox = card.getBoundingClientRect();
  return cardBox.left - scrollerBox.left + scroller.scrollLeft;
}

const CARD_GAP = 12;

function ShotCarousel({
  shots,
  selected,
  frame,
  onSelect,
}: {
  shots: string[];
  selected: string;
  frame: "phone" | "wide";
  onSelect: (src: string) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const thumb = scroller.querySelector<HTMLElement>(`[data-shot="${CSS.escape(selected)}"]`);
    if (!thumb) return;
    const start = cardOffset(scroller, thumb);
    const viewStart = scroller.scrollLeft;
    const viewEnd = viewStart + scroller.clientWidth;
    if (start >= viewStart - 1 && start + thumb.offsetWidth <= viewEnd + 1) return;
    const max = scroller.scrollWidth - scroller.clientWidth;
    scroller.scrollTo({ left: Math.min(Math.max(0, start), max), behavior: "smooth" });
  }, [selected]);

  function scrollByCard(direction: -1 | 1) {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>("[data-shot]");
    if (!scroller || !card) return;
    const stride = card.offsetWidth + CARD_GAP;
    const index = Math.round(scroller.scrollLeft / stride) + direction;
    const max = scroller.scrollWidth - scroller.clientWidth;
    scroller.scrollTo({ left: Math.min(Math.max(0, index * stride), max), behavior: "smooth" });
  }

  return (
    <div className="min-w-0">
      <div
        ref={scrollerRef}
        className="flex gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="listbox"
        aria-label="Capturas"
      >
        {shots.map((src, index) => {
          const active = src === selected;
          const note = shotNotes[src];
          const fallback = src.split("/").pop()?.replace(/\.[^.]+$/, "").replace(/-/g, " ") ?? `Captura ${index + 1}`;
          const title = note?.title ?? fallback.charAt(0).toUpperCase() + fallback.slice(1);
          return (
            <button
              key={src}
              type="button"
              role="option"
              data-shot={src}
              aria-selected={active}
              aria-label={title}
              onClick={() => onSelect(src)}
              className={`snap-start shrink-0 text-left ${frame === "phone" ? "w-[132px]" : "w-[240px]"}`}
            >
              <span className="flex h-[220px] w-full items-center justify-center">
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="max-h-full max-w-full object-contain"
                />
              </span>
              <span className="mt-3 block text-[13px] leading-snug">
                <strong className={active ? "text-ink" : "text-white/80"}>{title}. </strong>
                <span className="font-normal text-mute">{note?.detail ?? "Captura del producto en uso."}</span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Capturas anteriores"
          onClick={() => scrollByCard(-1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-ink hover:bg-white/20"
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          aria-label="Capturas siguientes"
          onClick={() => scrollByCard(1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-ink hover:bg-white/20"
        >
          <Chevron direction="right" />
        </button>
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d={direction === "left" ? "M10 3.5 5.5 8 10 12.5" : "M6 3.5 10.5 8 6 12.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActionLinks({ project }: { project: FeaturedProject }) {
  if (!project.demoUrl && !project.repoUrl) {
    return <p className="text-sm leading-relaxed text-mute">Publicado en App Store y Google Play.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {project.demoUrl ? (
        <motion.a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center rounded-full bg-apple px-5 text-sm font-medium text-white"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {project.demoLabel}
        </motion.a>
      ) : null}
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-5 text-sm text-ink"
        >
          Ver código
        </a>
      ) : null}
    </div>
  );
}

export function AppleScrollyProject({ project, anchor }: { project: FeaturedProject; anchor?: string }) {
  const reduce = useReducedMotion();
  const [shot, setShot] = useState(project.features?.[0]?.shot ?? project.shots[0] ?? project.mockupUrl);
  const [paused, setPaused] = useState(false);
  const selectShot = useCallback((src: string, source: "auto" | "user") => {
    if (source === "user") setPaused(true);
    setShot(src);
  }, []);

  return (
    <section id={anchor ?? project.id} className="scroll-mt-28 overflow-x-clip border-t border-white/[0.06] px-5 py-20 md:px-8 md:py-28">
      <motion.div
        className="mx-auto min-w-0 max-w-6xl"
        initial={reduce ? false : { y: 32, scale: 0.98 }}
        whileInView={{ y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 180, damping: 26 }}
      >
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mute">{project.category}</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{project.name}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mute">{project.tagline}</p>

        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.14em] text-mute">Solución</p>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-mute">{project.description}</p>

        <div className="mt-12 space-y-14">
          {project.hotspots ? (
            <div className="flex justify-center">
              <HardwareBreakdown shot={project.mockupUrl} alt={project.name} hotspots={project.hotspots} />
            </div>
          ) : null}
          {project.features ? (
            <FeatureTabs
              features={project.features}
              deviceType={project.deviceType}
              shot={shot}
              paused={paused}
              fallback={project.tagline}
              onSelectShot={selectShot}
            />
          ) : null}
          {!project.features ? (
            <div className="relative mx-auto w-fit">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: "var(--glow)" }}
              />
              <ProjectMockup
                src={shot}
                alt={project.name}
                frame={project.frame}
                videoUrl={project.videoUrl}
                interactive={false}
              />
            </div>
          ) : null}
        </div>

        {project.shots.length > 1 ? (
          <div className="mt-8">
            <ShotCarousel shots={project.shots} selected={shot} frame={project.frame} onSelect={(src) => selectShot(src, "user")} />
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="ambient glass rounded-3xl p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">Problema</p>
            <p className="mt-3 text-[15px] leading-relaxed">{project.problem}</p>
          </article>
          <article className="ambient glass rounded-3xl p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">Resultados</p>
            <ul className="mt-3 space-y-4">
              {project.metrics.map((metric) => (
                <li key={metric.value}>
                  <p className="text-base font-semibold">{metric.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{metric.detail}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="ambient glass rounded-3xl p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">Tecnologías</p>
            <p className="mt-3 text-sm leading-relaxed text-mute">{project.techStack.join(" · ")}</p>
            <div className="mt-5">
              <ActionLinks project={project} />
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

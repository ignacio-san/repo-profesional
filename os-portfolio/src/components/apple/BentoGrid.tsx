import { skills } from "@/data/portfolioData";

export function BentoGrid() {
  return (
    <section id="oficio" className="scroll-mt-16 border-t border-white/[0.06] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-mute">Habilidades</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Tecnología con un propósito claro.
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {skills.map((group) => (
            <article
              key={group.id}
              className={`bento-card glass rounded-3xl p-7 md:p-8 ${group.span === 2 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{group.detail}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

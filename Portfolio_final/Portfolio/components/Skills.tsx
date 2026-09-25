import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const accents = ["#8b6cff", "#2fd9f0", "#f472b6", "#a3e635", "#fbbf24"];

function trackSpotlight(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
      <SectionHeading index="05" kicker="Toolkit" title={<>What I <span className="text-gradient">work with.</span></>} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={i * 0.06}
            onPointerMove={trackSpotlight}
            style={{ "--accent": accents[i % accents.length] } as React.CSSProperties}
            className={`spotlight glass rounded-[28px] p-7 ${i === 0 ? "lg:row-span-2" : ""}`}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: accents[i % accents.length], boxShadow: `0 0 14px ${accents[i % accents.length]}` }} />
              <h3 className="font-display text-xl font-semibold text-fg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-fg/80 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-fg">
                  {s}
                </span>
              ))}
            </div>
            {i === 0 && (
              <p className="mt-8 text-sm leading-relaxed text-muted">
                My specialty is the hard part of voice AI: keeping a phone call feeling human when every hop (telephony, model, TTS) adds latency.
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

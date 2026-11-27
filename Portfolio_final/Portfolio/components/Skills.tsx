import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const accents = ["#8b6cff", "#2fd9f0", "#f472b6", "#a3e635", "#fbbf24"];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading index="04" kicker="Toolkit" title="Skills" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={i * 0.06}
            style={{ "--accent": accents[i % accents.length] } as React.CSSProperties}
            className={`rounded-[24px] border border-line p-7 ${i === 0 ? "lg:row-span-2" : ""}`}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: accents[i % accents.length] }} />
              <h3 className="font-display text-xl font-semibold text-fg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-fg/80 transition ">
                  {s}
                </span>
              ))}
            </div>
            {i === 0 && (
              <p className="mt-8 text-sm leading-relaxed text-muted">
                I treat an LLM feature as unfinished until it has an eval set. Fixed inputs, a metric that matches the business need, and a re-run after every change are how I tell a real improvement from a lucky demo.
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

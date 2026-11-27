import Link from "next/link";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Points({ points }: { points: string[] }) {
  if (!points.length) return null;
  return (
    <ul className="mt-3 space-y-2.5">
      {points.map((p) => (
        <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-fg/80">
          <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-cyan" />
          {p}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading title="Experience" />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[calc(28%+7px)]" />

        <div className="space-y-16">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.org} delay={0.05 * i} className="relative grid gap-4 pl-10 md:grid-cols-[28%_1fr] md:gap-12 md:pl-0">
              <div className="md:pr-10 md:text-right">
                <p className="font-mono text-sm text-muted">{e.period}</p>
                {e.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-ok/30 bg-ok/10 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-ok">
                    current
                  </span>
                )}
              </div>

              <span
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-bg md:left-[28%] ${e.current ? "bg-violet" : "bg-faint"}`}
              />

              <div className="md:pl-10">
                <h3 className="font-display text-2xl font-semibold text-fg md:text-3xl">{e.role}</h3>
                <p className="mt-1 text-violet">{e.org}</p>
                <p className="mt-4 text-muted">{e.summary}</p>
                <div className="mt-2">
                  <Points points={e.points} />
                </div>

                {e.groups?.map((g) => (
                  <div key={g.title} className="mt-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="text-base font-semibold text-fg">{g.title}</h4>
                      {g.link && (
                        <Link href={g.link.href} className="text-sm text-violet underline-offset-4 hover:underline">
                          {g.link.label} →
                        </Link>
                      )}
                    </div>
                    <Points points={g.points} />
                  </div>
                ))}

                <div className="mt-6 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

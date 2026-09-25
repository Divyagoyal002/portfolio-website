import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
      <SectionHeading index="02" kicker="Experience" title={<>Where I&apos;ve been <span className="text-gradient">building.</span></>} />

      <div ref={ref} className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[calc(28%+7px)]" />
        <motion.div style={{ scaleY: fill }} className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-violet via-cyan to-pink md:left-[calc(28%+7px)]" />

        <div className="space-y-16">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.org} delay={0.05 * i} className="relative grid gap-4 pl-10 md:grid-cols-[28%_1fr] md:gap-12 md:pl-0">
              <div className="md:pr-10 md:text-right">
                <p className="font-mono text-sm text-muted">{e.period}</p>
                {e.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> now
                  </span>
                )}
              </div>

              <span
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-bg md:left-[28%] ${e.current ? "bg-violet shadow-[0_0_0_6px_rgba(139,108,255,0.2),0_0_24px_rgba(139,108,255,0.8)]" : "bg-faint"}`}
              />

              <div className="md:pl-10">
                <h3 className="font-display text-2xl font-semibold text-fg md:text-3xl">{e.role}</h3>
                <p className="mt-1 text-violet">{e.org}</p>
                <p className="mt-4 text-muted">{e.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-fg/80">
                      <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-cyan" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
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

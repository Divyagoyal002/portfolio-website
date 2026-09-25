import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, useInView } from "framer-motion";
import { profile, stats } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const marquee = ["OpenAI Realtime", "PyTorch", "FastAPI", "LangGraph", "Cartesia", "RAG", "WebSockets", "Qwen-VL", "Next.js", "MongoDB", "CrewAI", "Docker", "AWS", "scikit-learn"];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
      <SectionHeading
        index="01"
        kicker="About"
        title={
          <>
            From datasets to <span className="text-gradient">dial tones.</span>
          </>
        }
      />

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line">
            <Image src="/profilepic.jpg" alt="Divya Goyal" fill sizes="(max-width: 768px) 80vw, 400px" className="object-cover object-top grayscale-[35%] transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-mono text-xs text-fg/80">📍 {profile.location}</p>
          </div>
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-violet/30 via-transparent to-cyan/20 blur-2xl" />
        </Reveal>

        <div>
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m an <span className="text-fg">AI/ML Engineer at Onetab Generative</span>, with an M.Tech in AI &amp; Data Science from DAVV. I started in analytics and statistics, moved into deep learning, and now build generative AI systems that ship to production.
            </p>
            <p>
              Most days I work on <span className="text-fg">real-time voice agents</span>. These are phone agents that listen, reason, call tools and answer in the middle of a sentence, with latency, cost and pronunciation tuned for Indian callers. I also build <span className="text-fg">multi-agent document AI</span> and code-generation systems.
            </p>
            <p>
              Outside work I take on research-grade side projects: physics-informed super-resolution of ocean currents, wearable gait sensing for dogs, and cognitive-screening games for older adults.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-bg p-6">
                <p className="font-display text-4xl font-semibold text-fg md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee mt-24 overflow-hidden border-y border-line py-6">
        <div className="marquee-track flex w-max gap-12 font-display text-2xl text-faint md:text-3xl">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap transition-colors hover:text-fg">
              {m}
              <span className="text-violet">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

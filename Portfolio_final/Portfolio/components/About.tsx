import Image from "next/image";
import { profile, stats } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading index="01" kicker="About" title="About me" />

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line">
            <Image src="/profilepic.jpg" alt="Divya Goyal" fill sizes="(max-width: 768px) 80vw, 400px" className="object-cover object-top" />
          </div>
          <p className="mt-3 font-mono text-xs text-muted">{profile.location}</p>
        </Reveal>

        <div>
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m an <span className="text-fg">AI/ML Engineer at {profile.company}</span>, with an M.Tech in AI &amp; Data Science from DAVV. I started in analytics and statistics, moved into deep learning, and now build LLM systems that run in production.
            </p>
            <p>
              Most of my work so far has been <span className="text-fg">real-time voice agents</span>: phone agents that listen, call tools and answer mid-conversation, with latency, cost and pronunciation tuned for Indian callers. I also build <span className="text-fg">document AI</span> and agents that act on business data behind human approval. Where I can, I build an eval set, so a prompt or model change is judged on numbers rather than on a demo.
            </p>
            <p>
              Outside work I build research side projects: physics-informed super-resolution of ocean currents, wearable gait sensing for dogs, and cognitive-screening games for older adults.
            </p>
          </Reveal>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg p-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold text-fg">
                  {s.decimals ? s.value.toFixed(s.decimals) : s.value}
                  {s.suffix}
                </dd>
                <dd className="mt-2 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { profile, stats } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading title="About" />

      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-14">
        <Reveal className="relative w-40 md:w-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line">
            <Image src="/profilepic.jpg" alt="Divya Goyal" fill sizes="(max-width: 768px) 80vw, 400px" className="object-cover object-top" />
          </div>
          <p className="mt-3 font-mono text-xs text-muted">{profile.location}</p>
        </Reveal>

        <div>
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m an <span className="text-fg">{profile.role} at {profile.company}</span>, with an M.Tech in AI &amp; Data Science from DAVV. I started in analytics and statistics, moved into deep learning, and now build LLM systems that run in production.
            </p>
            <p>
              At Onetab I worked on <span className="text-fg">TACTIVE</span>, a production agentic AI platform for RIA firms (multi-agent orchestration, RAG over Valkey, compliance guardrails, Langfuse AgentOps), and on <span className="text-fg">multilingual voice agents</span> on the OpenAI Realtime API. I was the primary GenAI point of contact for product and backend teams and mentored 8 AI/ML interns. Now at Brain Inventory I&apos;m building a document-intelligence system that checks documents for integrity and authenticity.
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

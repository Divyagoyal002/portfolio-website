import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { mentorship, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

function Testimonials() {
  const [i, setI] = useState(0);
  const items = mentorship.testimonials;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="relative flex h-full flex-col justify-center">
      <span aria-hidden className="font-serif text-8xl leading-none text-violet/40">&ldquo;</span>
      <div className="relative -mt-8 min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="font-serif text-2xl italic leading-snug text-fg md:text-[1.7rem]">{items[i].quote}</blockquote>
            <figcaption className="mt-5 font-mono text-xs uppercase tracking-wider text-muted">{items[i].name} · via Topmate</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex gap-2">
        {items.map((_, j) => (
          <button
            key={j}
            aria-label={`Show testimonial ${j + 1}`}
            onClick={() => setI(j)}
            className={`h-1.5 rounded-full transition-all duration-500 ${j === i ? "w-8 bg-violet" : "w-3 bg-white/15 hover:bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Mentorship() {
  return (
    <section id="mentorship" className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
      <SectionHeading
        index="03"
        kicker="Mentorship"
        title={
          <>
            I learn by <span className="text-gradient">teaching.</span>
          </>
        }
        sub="I mentor the interns in my office, and anyone can book a 1:1 session with me on Topmate."
      />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="glass relative overflow-hidden rounded-[28px] p-7 md:p-9">
          <div aria-hidden className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet/20 blur-[90px]" />
          <Testimonials />
        </Reveal>

        <Reveal delay={0.1} className="glass flex flex-col rounded-[28px] p-7 md:p-9">
          <div className="grid grid-cols-3 gap-4 border-b border-line pb-6 text-center">
            <div>
              <p className="flex items-center justify-center gap-1.5 font-display text-3xl font-semibold text-fg">
                {mentorship.rating}.0 <FaStar className="text-xl text-amber-300" />
              </p>
              <p className="mt-1 text-xs text-muted">{mentorship.ratings} ratings</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-fg">{mentorship.bookings}+</p>
              <p className="mt-1 text-xs text-muted">sessions booked</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-fg">Free</p>
              <p className="mt-1 text-xs text-muted">to ask a question</p>
            </div>
          </div>

          <ul className="mt-5 flex-1 divide-y divide-line">
            {mentorship.services.map((s) => (
              <li key={s.name} className="flex items-center justify-between gap-4 py-3">
                <div>
                  <p className="text-fg">{s.name}</p>
                  <p className="text-xs text-muted">{s.format}</p>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${s.price === "Free" ? "bg-emerald-400/10 text-emerald-300" : "bg-white/[0.05] text-muted"}`}>
                  {s.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Magnetic>
              <a href={profile.topmate} target="_blank" rel="noopener noreferrer" className="group relative inline-flex overflow-hidden rounded-full bg-fg px-6 py-3 font-medium text-bg">
                <span className="relative z-10">Book on Topmate ↗</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet to-cyan transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.linktree} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-fg transition hover:border-white/30">
                <SiLinktree className="text-[#43e55e]" /> All my links
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {mentorship.roles.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.08} className="rounded-[24px] border border-line p-6 transition-colors hover:border-white/20">
            <p className="font-mono text-xs text-violet">0{i + 1}</p>
            <h3 className="mt-3 font-display text-lg font-semibold text-fg">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { profile } from "@/data/portfolio";
import Waveform from "./Waveform";
import LiveCall from "./LiveCall";
import Magnetic from "./Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % profile.rotatingRoles.length), 2800);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block overflow-hidden pb-1 align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
          className="inline-block whitespace-nowrap"
        >
          <span className="text-gradient">{profile.rotatingRoles[i]}</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 600], [1, 0]);
  const lift = useTransform(scrollY, [0, 600], [0, -120]);
  const [first, last] = profile.name.split(" ");

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-violet/25 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] h-[460px] w-[460px] rounded-full bg-cyan/15 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[35%] h-[380px] w-[380px] rounded-full bg-pink/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      </div>
      <Waveform className="pointer-events-none absolute inset-x-0 top-1/2 h-[46vh] w-full -translate-y-1/2 opacity-70" />

      <motion.div style={{ opacity: fade, y: lift }} className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            {profile.role} @ {profile.company} · {profile.location}
          </motion.p>

          <h1 className="font-display text-[clamp(3.6rem,11vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.045em]">
            {[first, last].map((word, wi) => (
              <span key={word} className="block overflow-hidden pb-2">
                <motion.span
                  className={`inline-block ${wi === 1 ? "text-gradient pl-[0.04em]" : "text-fg"}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + wi * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <p className="mt-6 font-display text-2xl text-fg/90 md:text-3xl">
              I build <RotatingRole />
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a href="#projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-7 py-3.5 font-medium text-bg">
                  <span className="relative z-10">See my work</span>
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet to-cyan transition-transform duration-500 group-hover:translate-x-0" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.topmate} target="_blank" rel="noopener noreferrer" className="glass inline-flex rounded-full px-7 py-3.5 font-medium text-fg transition-colors hover:border-white/30">
                  1:1 Mentorship ↗
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="glass inline-flex rounded-full px-7 py-3.5 font-medium text-fg transition-colors hover:border-white/30">
                  Résumé ↗
                </a>
              </Magnetic>
              <div className="ml-1 flex items-center gap-4 text-xl text-muted">
                {[
                  { href: profile.github, Icon: FaGithub, label: "GitHub" },
                  { href: profile.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
                  { href: profile.twitter, Icon: FaXTwitter, label: "X" },
                  { href: profile.linktree, Icon: SiLinktree, label: "Linktree" },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition hover:-translate-y-0.5 hover:text-fg">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.9, duration: 1.1, ease }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="w-full max-w-sm">
            <LiveCall />
          </motion.div>
        </motion.div>
      </motion.div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        <span className="flex flex-col items-center gap-3">
          scroll
          <span className="relative h-10 w-px overflow-hidden bg-line">
            <motion.span className="absolute inset-x-0 top-0 h-4 bg-fg" animate={{ y: [-16, 40] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
          </span>
        </span>
      </a>
    </section>
  );
}

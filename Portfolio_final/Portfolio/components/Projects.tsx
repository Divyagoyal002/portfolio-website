import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { projects, type Category, type Project } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import VoicePipeline from "./VoicePipeline";
import ProjectArt from "./ProjectArt";
import { lenisRef } from "./SmoothScroll";

const filters: ("All" | Category)[] = ["All", "Voice AI", "Agents & GenAI", "Research", "ML & Data"];

function trackSpotlight(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function Card({ p, onOpen, big }: { p: Project; onOpen: () => void; big: boolean }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onPointerMove={trackSpotlight}
      onClick={onOpen}
      style={{ "--accent": p.accent } as React.CSSProperties}
      className={`spotlight glass group flex flex-col overflow-hidden rounded-[28px] text-left transition-colors hover:border-white/20 ${big ? "md:col-span-2" : ""}`}
    >
      <div className={`relative w-full overflow-hidden border-b border-line ${big ? "h-44 md:h-52" : "h-36"}`} style={{ background: `radial-gradient(120% 100% at 50% 100%, ${p.accent}22, transparent 70%)` }}>
        <div className="absolute inset-0 p-6 opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100">
          <ProjectArt category={p.category} accent={p.accent} />
        </div>
        <div className="absolute left-4 top-4 flex gap-2 font-mono text-[10px] uppercase tracking-wider">
          <span className="rounded-full bg-bg/70 px-2.5 py-1 text-fg/80 backdrop-blur">{p.category}</span>
          <span className="rounded-full bg-bg/70 px-2.5 py-1 text-muted backdrop-blur">{p.context}</span>
        </div>
        <span className="absolute right-4 top-4 font-mono text-[11px] text-muted">{p.year}</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-fg md:text-2xl">
          {p.title}
          <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" style={{ color: p.accent }}>
            ↗
          </span>
        </h3>
        <p className="mt-1 text-sm" style={{ color: p.accent }}>
          {p.tagline}
        </p>
        <p className={`mt-3 text-[15px] leading-relaxed text-muted ${big ? "" : "line-clamp-3"}`}>{p.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {p.stack.slice(0, big ? 6 : 4).map((s) => (
            <span key={s} className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-fg/70">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    lenisRef.current?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      lenisRef.current?.start();
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-md md:items-center md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        data-lenis-prevent
        initial={{ y: 60, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-t-[28px] border border-line bg-elev md:rounded-[28px]"
      >
        <div className="relative h-48 border-b border-line" style={{ background: `radial-gradient(120% 100% at 50% 100%, ${p.accent}33, transparent 70%)` }}>
          <div className="absolute inset-0 p-8">
            <ProjectArt category={p.category} accent={p.accent} />
          </div>
          <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-bg/70 text-fg backdrop-blur transition hover:rotate-90">
            ✕
          </button>
        </div>
        <div className="p-7 md:p-9">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {p.category} · {p.context} · {p.year}
          </p>
          <h3 className="mt-2 font-display text-3xl font-semibold text-fg">{p.title}</h3>
          <p className="mt-1" style={{ color: p.accent }}>
            {p.tagline}
          </p>
          <p className="mt-5 leading-relaxed text-muted">{p.description}</p>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-faint">Highlights</h4>
          <ul className="mt-3 space-y-2.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-fg/85">
                <span style={{ color: p.accent }}>▹</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:scale-[1.03]">
                <FaGithub /> Source
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-fg transition hover:border-white/30">
                Live demo ↗
              </a>
            )}
            {!p.github && !p.live && (
              <p className="font-mono text-xs text-faint">🔒 Proprietary codebase. Happy to walk through it on a call.</p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter((p) => filter === "All" || p.category === filter);
  const visible = filter === "All" && !showAll ? filtered.slice(0, 8) : filtered;

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
      <SectionHeading
        index="03"
        kicker="Selected work"
        title={
          <>
            Things I&apos;ve <span className="text-gradient">shipped.</span>
          </>
        }
        sub="Production systems from work, plus research side projects from nights and weekends. Click any card for the details."
      />

      <VoicePipeline />

      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors ${filter === f ? "text-bg" : "text-muted hover:text-fg"}`}
          >
            {filter === f && <motion.span layoutId="filter-pill" className="absolute inset-0 -z-10 rounded-full bg-fg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
            {f}
            <span className="ml-1.5 font-mono text-[10px] opacity-60">{f === "All" ? projects.length : projects.filter((p) => p.category === f).length}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-3" style={{ gridAutoFlow: "dense" }}>
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <Card key={p.title} p={p} big={!!p.featured && filter === "All"} onOpen={() => setOpen(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filter === "All" && filtered.length > 8 && (
        <div className="mt-10 flex justify-center">
          <button onClick={() => setShowAll(!showAll)} className="glass rounded-full px-6 py-3 text-sm text-fg transition hover:border-white/30">
            {showAll ? "Show fewer" : `Show all ${filtered.length} projects`}
          </button>
        </div>
      )}

      {typeof document !== "undefined" &&
        createPortal(<AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>, document.body)}
    </section>
  );
}

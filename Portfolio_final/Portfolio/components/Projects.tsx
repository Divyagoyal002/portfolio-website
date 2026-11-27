import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Category, type Project } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import VoicePipeline from "./VoicePipeline";
import { Links, Measured, Stack, contextLabel } from "./ProjectFacts";

const filters: ("All" | Category)[] = ["All", "Voice AI", "Agents & GenAI", "Research", "ML & Data"];
const main = projects.filter((p) => !p.earlier);
const earlier = projects.filter((p) => p.earlier);

function CardBody({ p, big }: { p: Project; big: boolean }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
        <span className="rounded-full border border-line px-2.5 py-1">{p.category}</span>
        <span className="rounded-full border border-line px-2.5 py-1">{contextLabel(p)}</span>
        <span className="ml-auto">{p.year}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-fg md:text-2xl">{p.title}</h3>
      <p className="accent-text mt-1 text-sm" style={{ "--accent": p.accent } as React.CSSProperties}>
        {p.tagline}
      </p>
      <p className={`mt-3 text-[15px] leading-relaxed text-muted ${big ? "" : "line-clamp-3"}`}>{p.description}</p>
      {p.measured && (
        <p className="mt-3 font-mono text-xs text-fg/75">
          measured · {p.measured.items[0].value} {p.measured.items[0].label}
        </p>
      )}
      {p.status && <p className="mt-3 font-mono text-xs text-warn">status · {p.status}</p>}
      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {p.stack.slice(0, big ? 6 : 4).map((s) => (
          <span key={s} className="rounded-full bg-fg/[0.05] px-2.5 py-1 font-mono text-xs text-fg/70">
            {s}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm text-fg/80">{p.slug ? "Read the case study →" : "Details →"}</p>
    </>
  );
}

const cardClass = (big: boolean) =>
  `flex flex-col rounded-[24px] border border-line bg-elev/40 p-6 text-left transition-colors hover:border-fg/25 ${big ? "md:col-span-2" : ""}`;

function Card({ p, onOpen, big }: { p: Project; onOpen: () => void; big: boolean }) {
  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className={big ? "md:col-span-2" : ""}>
      {p.slug ? (
        <Link href={`/work/${p.slug}`} className={`${cardClass(false)} h-full`}>
          <CardBody p={p} big={big} />
        </Link>
      ) : (
        <button onClick={onOpen} className={`${cardClass(false)} h-full w-full`}>
          <CardBody p={p} big={big} />
        </button>
      )}
    </motion.div>
  );
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 md:items-center md:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-t-[24px] border border-line bg-elev p-7 md:rounded-[24px] md:p-9"
      >
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg transition hover:border-fg/30">
          ✕
        </button>
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          {p.category} · {contextLabel(p)} · {p.year}
        </p>
        <h3 className="mt-3 pr-10 font-display text-3xl font-semibold text-fg">{p.title}</h3>
        <p className="accent-text mt-1" style={{ "--accent": p.accent } as React.CSSProperties}>
          {p.tagline}
        </p>
        <p className="mt-5 leading-relaxed text-muted">{p.description}</p>
        {p.status && <p className="mt-4 rounded-xl border border-warn/30 px-4 py-3 text-sm text-warn">Status: {p.status}</p>}

        <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-faint">Highlights</h4>
        <ul className="mt-3 space-y-2.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-fg/85">
              <span className="accent-text" style={{ "--accent": p.accent } as React.CSSProperties}>▹</span>
              {h}
            </li>
          ))}
        </ul>

        {p.measured && (
          <>
            <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-faint">Measured</h4>
            <Measured p={p} />
          </>
        )}

        {p.builtWith && (
          <>
            <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-faint">How it&apos;s built</h4>
            <dl className="mt-3 space-y-4">
              {p.builtWith.map((b) => (
                <div key={b.tech}>
                  <dt className="accent-text font-medium" style={{ "--accent": p.accent } as React.CSSProperties}>
                    {b.tech}
                  </dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-muted">{b.why}</dd>
                </div>
              ))}
            </dl>
          </>
        )}

        <div className="mt-7">
          <Stack p={p} />
        </div>
        <div className="mt-8">
          <Links p={p} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = main.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading
        title="Selected work"
        sub="The four projects with case studies are the ones I'd most like to talk about. Each states what was measured, on what data, and what didn't work."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${filter === f ? "bg-fg text-bg" : "text-muted hover:text-fg"}`}
          >
            {f}
            <span className="ml-1.5 font-mono text-xs opacity-60">{f === "All" ? main.length : main.filter((p) => p.category === f).length}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-3" style={{ gridAutoFlow: "dense" }}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <Card key={p.title} p={p} big={!!p.featured && filter === "All"} onOpen={() => setOpen(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-20">
        <VoicePipeline />
      </div>

      <div className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Earlier work (2024–25)</h3>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {earlier.map((p) => (
            <li key={p.title} className="flex flex-col gap-1 py-3 md:flex-row md:items-baseline md:gap-6">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-medium text-fg underline-offset-4 hover:underline md:w-64 md:flex-none">
                {p.title} ↗
              </a>
              <span className="text-sm text-muted">{p.tagline}</span>
              <span className="font-mono text-xs text-faint md:ml-auto">{p.stack.slice(0, 3).join(" · ")}</span>
            </li>
          ))}
        </ul>
      </div>

      {typeof document !== "undefined" && createPortal(<AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>, document.body)}
    </section>
  );
}

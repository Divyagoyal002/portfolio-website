import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/portfolio";

// Shared pieces for the project modal and the case-study pages.

export const contextLabel = (p: Project) => (p.org ? `Work · ${p.org}` : p.context);

export function Measured({ p }: { p: Project }) {
  if (!p.measured) return null;
  return (
    <>
      <dl className="mt-3 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {p.measured.items.map((m) => (
          <div key={m.label} className="bg-elev p-4">
            <dt className="font-mono text-lg text-fg">{m.value}</dt>
            <dd className="mt-1 text-sm leading-snug text-muted">{m.label}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-faint">{p.measured.note}</p>
      {p.measured.source && (
        <a href={p.measured.source} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-mono text-xs text-fg/80 underline underline-offset-4 hover:text-fg">
          Raw results and commands ↗
        </a>
      )}
    </>
  );
}

export function Stack({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {p.stack.map((s) => (
        <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
          {s}
        </span>
      ))}
    </div>
  );
}

export function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90">
          <FaGithub /> Source
        </a>
      )}
      {p.live && (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-fg transition hover:border-white/30">
          Live demo ↗
        </a>
      )}
      {p.live?.includes("onrender.com") && <p className="text-xs text-faint">Free hosting: the first load can take up to a minute.</p>}
      {!p.github && !p.live && <p className="font-mono text-xs text-faint">Private codebase. I&apos;m happy to walk through it on a call.</p>}
    </div>
  );
}

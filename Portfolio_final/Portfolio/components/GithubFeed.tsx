import { FaGithub, FaStar } from "react-icons/fa6";
import type { Repo } from "@/lib/github";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

const langColor: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#e34c26",
  R: "#198CE7",
};

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

export default function GithubFeed({ repos }: { repos: Repo[] }) {
  if (!repos.length) return null;

  return (
    <div className="mt-24">
      <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Fresh from GitHub
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-fg md:text-3xl">Recently pushed</h3>
        </div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
          <FaGithub /> @Divyagoyal002 ↗
        </a>
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.05} className="h-full">
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col bg-bg p-5 transition-colors hover:bg-elev">
              <div className="flex items-center justify-between">
                <p className="font-mono text-sm text-fg transition group-hover:text-cyan">{r.name}</p>
                <span className="text-faint transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg">↗</span>
              </div>
              <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">{r.description || "No description yet. The code speaks for itself."}</p>
              <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-faint">
                {r.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ background: langColor[r.language] ?? "#888" }} />
                    {r.language}
                  </span>
                )}
                {r.stars > 0 && (
                  <span className="flex items-center gap-1">
                    <FaStar /> {r.stars}
                  </span>
                )}
                <span>pushed {fmt(r.pushedAt)}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

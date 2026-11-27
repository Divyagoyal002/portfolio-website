import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile } from "@/data/portfolio";
import SampleCall from "./SampleCall";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[88svh] max-w-6xl items-center px-5 pt-28 pb-16">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="mb-6 font-mono text-xs text-muted">
            {profile.role} at {profile.company} · {profile.location}
          </p>

          <h1 className="font-classic text-[clamp(3.2rem,9vw,7rem)] font-semibold leading-[0.95] tracking-[-0.01em] text-fg">{profile.name}</h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-medium text-bg transition hover:opacity-90">
              See my work →
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-line px-6 py-3 font-medium text-fg transition hover:border-white/30">
              Résumé ↗
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex rounded-full border border-line px-6 py-3 font-medium text-fg transition hover:border-white/30">
              Email me
            </a>
            <div className="ml-2 flex items-center gap-4 text-xl text-muted">
              {[
                { href: profile.github, Icon: FaGithub, label: "GitHub" },
                { href: profile.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
                { href: profile.twitter, Icon: FaXTwitter, label: "X" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition hover:text-fg">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <SampleCall />
        </div>
      </div>
    </section>
  );
}

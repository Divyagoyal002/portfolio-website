import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">Get in touch</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            For roles, projects or questions about my work, email is the best way to reach me. I usually reply within a day.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-fg px-7 py-3.5 font-medium text-bg transition hover:opacity-90">
            {profile.email}
          </a>
          <button onClick={copy} className="rounded-full border border-line px-5 py-3.5 text-sm text-fg transition hover:border-fg/30">
            {copied ? "Copied ✓" : "Copy address"}
          </button>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-5 py-3.5 text-sm text-fg transition hover:border-fg/30">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [
    { href: profile.github, Icon: FaGithub, label: "GitHub" },
    { href: profile.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
    { href: profile.twitter, Icon: FaXTwitter, label: "X" },
  ];
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="space-y-1.5 text-center font-mono text-xs text-faint md:text-left">
          <p>
            © {new Date().getFullYear()} {profile.name} · Built with Next.js
          </p>
          {/* Required author attribution (GPL-3.0 §7(b) additional term, see NOTICE). Do not remove. */}
          <p>
            Originally created by{" "}
            <a href="https://github.com/Divyagoyal002" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 transition hover:text-fg">
              Divya Goyal
            </a>{" "}
            in 2024
          </p>
        </div>
        <div className="flex items-center gap-5 text-lg text-muted">
          {socials.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition hover:-translate-y-0.5 hover:text-fg">
              <Icon />
            </a>
          ))}
          <Link href="/#top" aria-label="Back to top" className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-line text-sm transition hover:border-fg/30 hover:text-fg">
            ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Hello from ${form.name || "your portfolio"}`)}&body=${encodeURIComponent(form.message)}`;

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="text-violet">06</span> — Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-fg">
            Got something that should <span className="text-gradient">talk back?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Voice agents, LLM systems, research collaborations, or just a good problem. My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <button onClick={copy} className="group relative overflow-hidden rounded-full bg-fg px-8 py-4 font-medium text-bg">
              <span className="relative z-10">{copied ? "Copied to clipboard ✓" : profile.email}</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet to-cyan transition-transform duration-500 group-hover:translate-x-0" />
            </button>
          </Magnetic>
          <Magnetic>
            <a href={profile.topmate} target="_blank" rel="noopener noreferrer" className="glass inline-flex rounded-full px-8 py-4 font-medium text-fg transition hover:border-white/30">
              Book a call on Topmate ↗
            </a>
          </Magnetic>
          <Magnetic>
            <a href={profile.linktree} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-fg transition hover:border-white/30">
              <SiLinktree className="text-[#43e55e]" /> Linktree
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.2}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            className="glass mx-auto mt-14 max-w-2xl rounded-[28px] p-6 text-left md:p-8"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-faint">Or drop a quick note</p>
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-b border-line bg-transparent py-3 text-lg text-fg outline-none transition placeholder:text-faint focus:border-violet"
            />
            <textarea
              required
              rows={3}
              placeholder="What are you building?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-4 w-full resize-none border-b border-line bg-transparent py-3 text-lg text-fg outline-none transition placeholder:text-faint focus:border-violet"
            />
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-faint">Opens in your email app.</p>
              <button type="submit" className="rounded-full bg-violet px-6 py-2.5 text-sm font-medium text-white transition hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(139,108,255,0.6)]">
                Send →
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [
    { href: profile.github, Icon: FaGithub, label: "GitHub" },
    { href: profile.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
    { href: profile.twitter, Icon: FaXTwitter, label: "X" },
    { href: profile.instagram, Icon: FaInstagram, label: "Instagram" },
    { href: profile.linktree, Icon: SiLinktree, label: "Linktree" },
  ];
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="space-y-1.5 text-center font-mono text-xs text-faint md:text-left">
          <p>
            © {new Date().getFullYear()} {profile.name} · Built with Next.js, Framer Motion & too much chai
          </p>
          {/* Template credit: please keep this line if you reuse the site. */}
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
          <a href="#top" aria-label="Back to top" className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-line text-sm transition hover:border-white/30 hover:text-fg">
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

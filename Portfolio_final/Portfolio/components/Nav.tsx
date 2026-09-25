import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { profile } from "@/data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: progress }} className="h-[2px] origin-left bg-gradient-to-r from-violet via-cyan to-pink" />
      <nav
        className={`mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass !bg-bg/75 shadow-[0_8px_40px_rgba(0,0,0,0.45)]" : "border border-transparent"
        }`}
        style={{ width: "calc(100% - 24px)" }}
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-fg">
          divya<span className="text-violet">.</span>ai
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${active === l.id ? "text-fg" : "text-muted hover:text-fg"}`}
              >
                {active === l.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-transform hover:scale-[1.04] md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button className="md:hidden p-2 text-fg" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-3 mt-2 rounded-3xl p-3 md:hidden"
          >
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-display text-lg text-fg hover:bg-white/5">
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

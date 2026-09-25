import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// A looping, simulated phone call between a caller and one of my voice agents.
const script = [
  { who: "agent", text: "Namaste! This is Priya from the hospital. How can I help you today?" },
  { who: "caller", text: "I need to see a cardiologist tomorrow morning." },
  { who: "tool", text: "find_doctor(specialization=\"cardiology\", day=\"tomorrow\")" },
  { who: "agent", text: "Dr. Mehta has a 10:30 AM slot tomorrow. Shall I book it for you?" },
  { who: "caller", text: "Haan, please book it." },
  { who: "agent", text: "Done! You'll get an SMS confirmation shortly." },
] as const;

export default function LiveCall() {
  const [n, setN] = useState(1);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const step = setInterval(() => setN((v) => (v >= script.length ? 1 : v + 1)), 2200);
    const clock = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => {
      clearInterval(step);
      clearInterval(clock);
    };
  }, []);

  const lines = script.slice(0, n).slice(-4);

  return (
    <div className="glass w-full max-w-sm rounded-3xl p-5 shadow-[0_30px_80px_-20px_rgba(139,108,255,0.35)]">
      <div className="mb-4 flex items-center justify-between font-mono text-[11px] text-muted">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          LIVE CALL · voice agent
        </span>
        <span>
          {String(Math.floor(secs / 60)).padStart(2, "0")}:{String(secs % 60).padStart(2, "0")}
        </span>
      </div>

      <div className="flex h-[248px] flex-col justify-end gap-2.5 overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {lines.map((l) => (
            <motion.div
              key={l.text}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={
                l.who === "tool"
                  ? "self-center rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-1.5 font-mono text-[11px] text-cyan"
                  : l.who === "agent"
                  ? "max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-violet/20 px-3.5 py-2 text-sm text-fg"
                  : "max-w-[85%] self-end rounded-2xl rounded-br-sm bg-white/[0.07] px-3.5 py-2 text-sm text-fg/90"
              }
            >
              {l.who === "tool" ? `⚙ ${l.text}` : l.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-4 text-center font-mono text-[10px] uppercase tracking-wider text-faint">
        <div>
          <p className="text-sm text-fg">tools</p>mid-call
        </div>
        <div>
          <p className="text-sm text-fg">EN·HI·TE</p>languages
        </div>
        <div>
          <p className="text-sm text-fg">barge-in</p>enabled
        </div>
      </div>
    </div>
  );
}

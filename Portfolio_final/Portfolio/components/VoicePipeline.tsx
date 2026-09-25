import { motion } from "framer-motion";
import Reveal from "./Reveal";

const nodes = [
  { icon: "📞", title: "Caller", detail: "Any phone, any network" },
  { icon: "📡", title: "Telephony", detail: "Smartflo · μ-law 8 kHz over WebSocket" },
  { icon: "⚡", title: "FastAPI bridge", detail: "Resampling, VAD, barge-in, echo cancellation" },
  { icon: "🧠", title: "OpenAI Realtime", detail: "Reasoning + mid-call tool calls" },
  { icon: "🔊", title: "Cartesia TTS", detail: "Sentence-streamed speech, 20 ms frames" },
];

export default function VoicePipeline() {
  return (
    <Reveal className="glass relative mb-20 overflow-hidden rounded-[32px] p-6 md:p-10">
      <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/20 blur-[100px]" />
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">Under the hood</p>
      <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-fg md:text-3xl">
        How my voice agents hold a conversation in real time
      </h3>

      <div className="mt-10 flex flex-col items-stretch gap-0 lg:flex-row">
        {nodes.map((n, i) => (
          <div key={n.title} className="contents">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="rounded-2xl border border-line bg-bg/60 p-4 lg:w-44 lg:flex-none"
            >
              <p className="text-2xl">{n.icon}</p>
              <p className="mt-2 font-display font-semibold text-fg">{n.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{n.detail}</p>
            </motion.div>
            {i < nodes.length - 1 && <Flow i={i} />}
          </div>
        ))}
      </div>
      <p className="mt-8 font-mono text-xs text-faint">
        ↻ The caller&apos;s audio streams in while the agent&apos;s speech streams out. Interrupt it and it stops talking.
      </p>
    </Reveal>
  );
}

// Animated packet travelling along the link between two nodes.
function Flow({ i }: { i: number }) {
  return (
    <div className="relative mx-auto h-10 w-px bg-line lg:mx-0 lg:h-px lg:w-auto lg:min-w-6 lg:flex-1 lg:self-center">
      <motion.span
        className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_12px_#2fd9f0] lg:hidden"
        animate={{ top: ["-4px", "36px"], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.28, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_12px_#2fd9f0] lg:block"
        animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.28, ease: "easeInOut" }}
      />
    </div>
  );
}

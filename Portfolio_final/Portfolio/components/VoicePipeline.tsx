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
    <Reveal className="relative overflow-hidden rounded-[24px] border border-line p-6 md:p-10">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">Under the hood</p>
      <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-fg md:text-3xl">
        How my voice agents hold a conversation in real time
      </h3>

      <div className="mt-10 flex flex-col items-stretch gap-0 lg:flex-row">
        {nodes.map((n, i) => (
          <div key={n.title} className="contents">
            <div
              className="rounded-2xl border border-line bg-bg/60 p-4 lg:w-44 lg:flex-none"
            >
              <p className="text-2xl">{n.icon}</p>
              <p className="mt-2 font-display font-semibold text-fg">{n.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{n.detail}</p>
            </div>
            {i < nodes.length - 1 && <Flow />}
          </div>
        ))}
      </div>
      <p className="mt-8 font-mono text-xs text-faint">
        ↻ The caller&apos;s audio streams in while the agent&apos;s speech streams out. Interrupt it and it stops talking.
      </p>
    </Reveal>
  );
}

// Static connector between two nodes.
function Flow() {
  return <div className="mx-auto h-8 w-px bg-line lg:mx-0 lg:h-px lg:w-auto lg:min-w-6 lg:flex-1 lg:self-center" />;
}

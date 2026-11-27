import { profile } from "@/data/portfolio";

// An illustrative exchange, labelled as such. When profile.callRecording is set,
// a real test-call recording is shown above it.
const script = [
  { who: "agent", text: "Namaste! This is Priya from the hospital. How can I help you today?" },
  { who: "caller", text: "I need to see a cardiologist tomorrow morning." },
  { who: "tool", text: 'find_doctor(specialization="cardiology", day="tomorrow")' },
  { who: "agent", text: "Dr. Mehta has a 10:30 AM slot tomorrow. Shall I book it for you?" },
  { who: "caller", text: "Haan, please book it." },
] as const;

export default function SampleCall() {
  return (
    <figure className="w-full max-w-sm rounded-3xl border border-line bg-elev/60 p-5">
      <figcaption className="mb-4 font-mono text-[11px] uppercase tracking-wider text-muted">
        {profile.callRecording ? "Recorded test call" : "Example conversation (illustrative)"}
      </figcaption>

      {profile.callRecording && (
        <audio controls preload="none" src={profile.callRecording} className="mb-4 w-full">
          Your browser can&apos;t play this recording.
        </audio>
      )}

      <div className="space-y-2.5">
        {script.map((l, i) =>
          l.who === "tool" ? (
            <p key={i} className="rounded-xl border border-dashed border-line px-3 py-2 font-mono text-[11px] text-muted">
              tool call · {l.text}
            </p>
          ) : (
            <div key={i} className={`flex ${l.who === "caller" ? "justify-end" : "justify-start"}`}>
              <p className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${l.who === "caller" ? "bg-white/[0.06] text-fg" : "bg-violet/15 text-fg"}`}>
                {l.text}
              </p>
            </div>
          )
        )}
      </div>
    </figure>
  );
}

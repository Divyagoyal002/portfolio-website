import { useRef, useState } from "react";
import { profile } from "@/data/portfolio";

// Transcript of the recording in profile.callRecording (Stock2Track outbound call, English).
// The caller's name is replaced with a tone in the audio and with [name] here.
type Line = { t: number; who: "agent" | "caller" | "note"; text: string };

const transcript: Line[] = [
  { t: 0.8, who: "agent", text: "Hi, this is Priya calling from Stock2Track. Am I speaking with [name]?" },
  { t: 5.8, who: "caller", text: "Yes." },
  { t: 8.6, who: "agent", text: "Hi [name]. I noticed you showed interest in Stock2Track through OneTab. Before we continue, would you like to speak in English, Hindi or Telugu?" },
  { t: 18.5, who: "caller", text: "English." },
  { t: 19.5, who: "agent", text: "All right. Do you have a couple of minutes for a quick two-minute conversation?" },
  { t: 29.6, who: "caller", text: "Yes." },
  { t: 32.6, who: "agent", text: "Sounds good. What type of business are you running?" },
  { t: 36.6, who: "caller", text: "I'm running a retail store." },
  { t: 39.6, who: "agent", text: "Got it. How are you currently handling billing or inventory? Manual, spreadsheets or some software?" },
  { t: 47.6, who: "caller", text: "I'm using manual methods." },
  { t: 51.9, who: "agent", text: "What's the biggest operational challenge you want to fix first?" },
  { t: 60.9, who: "caller", text: "I think I want to fix inventory and billing." },
  { t: 67.9, who: "agent", text: "Stock2Track can help with inventory tracking, and a quick 15 to 20 minute demo would be the best way to see it. Would you like to schedule a demo?" },
  { t: 78.9, who: "caller", text: "Yes, please." },
  { t: 80.9, who: "agent", text: "What day and time would work best for you?" },
  { t: 84.9, who: "caller", text: "Tomorrow 11 am is better for me." },
  { t: 88.9, who: "note", text: "slot lookup" },
  { t: 92.9, who: "agent", text: "11 in the morning isn't open tomorrow. Would 10 in the morning or 12 in the afternoon work for you?" },
  { t: 97.9, who: "caller", text: "Yeah, 10 in the morning works." },
  { t: 101.2, who: "agent", text: "Great. I've noted the demo for tomorrow at 10 in the morning, and we'll share the confirmation on WhatsApp shortly." },
];

const mmss = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

export default function SampleCall() {
  const audio = useRef<HTMLAudioElement>(null);
  const [now, setNow] = useState(0);
  const src = profile.callRecording;

  const seek = (t: number) => {
    if (!audio.current) return;
    audio.current.currentTime = t;
    void audio.current.play();
  };

  const active = transcript.reduce((a, l, i) => (l.t <= now + 0.1 ? i : a), -1);

  return (
    <figure className="w-full max-w-sm rounded-3xl border border-line bg-elev/60 p-5">
      <figcaption className="mb-3 text-sm text-fg">
        Recorded call: Stock2Track voice agent
        <span className="mt-1 block font-mono text-xs leading-relaxed text-muted">
          Outbound qualification call, built at Onetab · 2 min · caller&apos;s name replaced with a tone
        </span>
      </figcaption>

      {src && (
        <audio ref={audio} controls preload="metadata" src={src} onTimeUpdate={(e) => setNow(e.currentTarget.currentTime)} className="mb-4 w-full">
          Your browser can&apos;t play this recording.
        </audio>
      )}

      <ol className="max-h-72 space-y-2 overflow-y-auto pr-1" aria-label="Call transcript">
        {transcript.map((l, i) => (
          <li key={i}>
            <button
              onClick={() => seek(l.t)}
              className={`flex w-full gap-2 rounded-xl px-2 py-1.5 text-left text-[13px] leading-snug transition ${i === active ? "bg-fg/[0.07]" : "hover:bg-fg/[0.04]"}`}
            >
              <span className="w-9 flex-none font-mono text-xs text-faint">{mmss(l.t)}</span>
              {l.who === "note" ? (
                <span className="font-mono text-xs text-muted">[{l.text}]</span>
              ) : (
                <span className={l.who === "agent" ? "text-fg" : "text-muted"}>
                  <span className="font-mono text-xs uppercase text-faint">{l.who === "agent" ? "Priya " : "Caller "}</span>
                  {l.text}
                </span>
              )}
            </button>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-faint">Click a line to jump to it. The transcript is lightly condensed.</p>
    </figure>
  );
}

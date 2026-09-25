import Reveal from "./Reveal";

export default function SectionHeading({ index, kicker, title, sub }: { index: string; kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        <span className="text-violet">{index}</span>
        <span className="h-px w-10 bg-line" />
        {kicker}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-fg md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 max-w-2xl text-lg text-muted">{sub}</p>}
    </Reveal>
  );
}

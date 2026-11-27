import Reveal from "./Reveal";

export default function SectionHeading({ title, sub }: { title: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 max-w-2xl text-lg text-muted">{sub}</p>}
    </Reveal>
  );
}

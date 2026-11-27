import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading title="Skills" />

      <Reveal>
        <dl className="grid gap-x-12 border-t border-line md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-4">
              <dt className="text-sm font-medium text-fg">{g.title}</dt>
              <dd className="text-sm leading-relaxed text-muted">{g.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

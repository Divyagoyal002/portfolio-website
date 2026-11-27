import { mentorship, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Mentorship() {
  const quote = mentorship.testimonials[0];
  return (
    <section id="mentorship" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading index="05" kicker="Mentorship" title="Mentoring and teaching" />

      <div className="grid gap-5 md:grid-cols-3">
        {mentorship.roles.map((r) => (
          <Reveal key={r.title} className="rounded-[24px] border border-line p-6">
            <h3 className="font-display text-lg font-semibold text-fg">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5 grid gap-6 rounded-[24px] border border-line p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <figure>
          <blockquote className="font-serif text-xl italic leading-snug text-fg/90">&ldquo;{quote.quote}&rdquo;</blockquote>
          <figcaption className="mt-3 font-mono text-xs text-muted">
            {quote.name}, Topmate mentee · {mentorship.rating}.0 from {mentorship.ratings} ratings · {mentorship.bookings} sessions booked
          </figcaption>
        </figure>
        <a href={profile.topmate} target="_blank" rel="noopener noreferrer" className="justify-self-start rounded-full border border-line px-5 py-2.5 text-sm text-fg transition hover:border-white/30">
          Topmate profile ↗
        </a>
      </Reveal>
    </section>
  );
}

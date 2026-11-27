import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { profile, projects, type Project } from "@/data/portfolio";
import { caseStudies, caseStudyBySlug, type CaseStudy } from "@/data/caseStudies";
import { Links, Measured, Stack, contextLabel } from "@/components/ProjectFacts";
import { Footer } from "@/components/Contact";

type Props = { slug: string };

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 font-mono text-xs uppercase tracking-[0.2em] text-faint">{children}</h2>;
}

export default function CaseStudyPage({ slug }: Props) {
  const p = projects.find((x) => x.slug === slug) as Project;
  const c = caseStudyBySlug(slug) as CaseStudy;

  return (
    <>
      <Head>
        <title>{`${p.title} · ${profile.name}`}</title>
        <meta name="description" content={p.tagline} />
      </Head>
      <main className="mx-auto max-w-3xl px-5 pt-16 pb-24">
        <Link href="/#projects" className="font-mono text-xs text-muted transition hover:text-fg">
          ← All projects
        </Link>

        <p className="mt-10 font-mono text-xs uppercase tracking-wider text-muted">
          {p.category} · {contextLabel(p)} · {p.year}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">{p.title}</h1>
        <p className="mt-3 text-lg" style={{ color: p.accent }}>
          {p.tagline}
        </p>
        <p className="mt-6 text-muted">{c.myRole}</p>

        <H2>The problem</H2>
        <p className="mt-3 text-lg leading-relaxed text-fg/90">{c.problem}</p>

        <H2>Constraints</H2>
        <ul className="mt-3 space-y-2">
          {c.constraints.map((x) => (
            <li key={x} className="flex gap-3 leading-relaxed text-fg/85">
              <span className="text-faint">—</span>
              {x}
            </li>
          ))}
        </ul>

        <H2>What I built</H2>
        <div className="mt-3 space-y-6">
          {c.approach.map((a) => (
            <section key={a.title}>
              <h3 className="font-display text-xl font-semibold text-fg">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{a.body}</p>
            </section>
          ))}
        </div>

        {p.measured && (
          <>
            <H2>Measured</H2>
            <Measured p={p} />
          </>
        )}

        <H2>What broke, and what I learned</H2>
        <div className="mt-3 space-y-6">
          {c.whatBroke.map((a) => (
            <section key={a.title}>
              <h3 className="font-display text-xl font-semibold text-fg">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{a.body}</p>
            </section>
          ))}
        </div>

        <H2>Next</H2>
        <ul className="mt-3 space-y-2">
          {c.next.map((x) => (
            <li key={x} className="flex gap-3 leading-relaxed text-fg/85">
              <span className="text-faint">—</span>
              {x}
            </li>
          ))}
        </ul>

        <H2>Stack</H2>
        <div className="mt-3">
          <Stack p={p} />
        </div>
        <div className="mt-10">
          <Links p={p} />
        </div>

        <p className="mt-16 border-t border-line pt-8 text-muted">
          Questions about this project?{" "}
          <a href={`mailto:${profile.email}`} className="text-fg underline underline-offset-4">
            {profile.email}
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: caseStudies.map((c) => ({ params: { slug: c.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug);
  if (!caseStudyBySlug(slug) || !projects.some((p) => p.slug === slug)) return { notFound: true };
  return { props: { slug } };
};

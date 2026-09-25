import Head from "next/head";
import type { GetStaticProps } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Mentorship from "@/components/Mentorship";
import GithubFeed from "@/components/GithubFeed";
import Skills from "@/components/Skills";
import Contact, { Footer } from "@/components/Contact";
import { getRecentRepos, type Repo } from "@/lib/github";

export default function Home({ repos }: { repos: Repo[] }) {
  return (
    <>
      <Head>
        <title>Divya Goyal · AI/ML Engineer</title>
      </Head>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Mentorship />
        <Projects />
        <section className="mx-auto -mt-16 max-w-6xl px-5">
          <GithubFeed repos={repos} />
        </section>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { repos: await getRecentRepos(6) },
  revalidate: 3600,
});

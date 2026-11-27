import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Mentorship from "@/components/Mentorship";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
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
        <Projects />
        <Skills />
        <Mentorship />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

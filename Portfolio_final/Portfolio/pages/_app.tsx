import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({ subsets: ["latin"] });
const grotesk = Space_Grotesk({ subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Font variables on :root so portaled UI (modals) inherits them too */}
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-grotesk: ${grotesk.style.fontFamily};
          --font-jetbrains: ${jetbrains.style.fontFamily};
        }
      `}</style>
      <SmoothScroll />
      <CursorGlow />
      <Component {...pageProps} />
    </>
  );
}

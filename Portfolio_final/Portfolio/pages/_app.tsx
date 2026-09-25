import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, Bricolage_Grotesque, Instrument_Serif, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({ subsets: ["latin"] });
const grotesk = Bricolage_Grotesque({ subsets: ["latin"] });
const classic = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"] });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
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
          --font-serif: ${serif.style.fontFamily};
          --font-classic: ${classic.style.fontFamily};
        }
      `}</style>
      <SmoothScroll />
      <CursorGlow />
      <Component {...pageProps} />
    </>
  );
}

import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const classic = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });
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
          --font-jetbrains: ${jetbrains.style.fontFamily};
          --font-classic: ${classic.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

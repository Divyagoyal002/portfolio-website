import { Html, Head, Main, NextScript } from "next/document";

const site = "https://divyagoyal6224-portfolio-website.vercel.app";
const title = "Divya Goyal · AI Engineer";
const description =
  "Divya Goyal, AI Engineer at Brain Inventory. Document AI, voice agents, tool-using agents, and the evals behind them.";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#07070c" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafaf7" media="(prefers-color-scheme: light)" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${site}/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Divya Goyal, AI Engineer at Brain Inventory" />
        <meta property="og:url" content={site} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${site}/og.png`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

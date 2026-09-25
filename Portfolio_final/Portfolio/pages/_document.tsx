import { Html, Head, Main, NextScript } from "next/document";

const title = "Divya Goyal · AI/ML Engineer";
const description =
  "Divya Goyal builds real-time voice agents, multi-agent document AI and physics-informed deep learning systems.";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#07070c" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/profilepic.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

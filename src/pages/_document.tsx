import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <meta name="description" content="Gilip Solutions " key="desc" />
        <meta property="og:title" content="Innovative Tech Solutions" />
        <meta
          property="og:description"
          content="Leading provider of innovative technology solutions for modern businesses"
        />
        <meta
          property="og:image"
          content="/G.png"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

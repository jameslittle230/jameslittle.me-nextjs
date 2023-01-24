import { useEffect } from "react";

import "../styles/globals.scss";
import Theme from "../src/components/Theme";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && "goatcounter" in window) {
      (window.goatcounter as any).count({
        path: router.asPath,
      });
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>jameslittle.me</title>
        <link
          rel="alternate"
          href="https://jameslittle.me/feed.xml"
          type="application/rss+xml"
          title="RSS"
        />
        <link rel="icon" sizes="192x192" href="/favicon.png"></link>
        <script
          data-goatcounter="https://jil.goatcounter.com/count"
          data-goatcounter-settings='{"no_onload": true}'
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>
      <Theme theme="green" />
      <Component {...pageProps} />
    </>
  );
}

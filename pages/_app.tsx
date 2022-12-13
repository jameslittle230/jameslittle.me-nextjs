import "../styles/globals.scss";
import Theme from "../src/components/Theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Theme theme="green" />
  <Component {...pageProps} /></>;
}

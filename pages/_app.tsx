import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "../src/hooks/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  const { setTheme } = useTheme();
  setTheme("green");
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

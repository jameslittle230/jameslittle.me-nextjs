import Head from "next/head";

export type ThemeColor = "green" | "blue" | "orange";

const hexForTheme = (theme: ThemeColor) => {
  switch (theme) {
    case "blue":
      return "#1b3855";
    case "green":
      return "#1b5532";
    case "orange":
      return "#551b24";
  }
};

const Theme = ({ theme }: { theme: ThemeColor }) => (
  <Head>
    <style>{`body {--theme-hue: var(--${theme}-hue)}`}</style>
    <meta name="theme-color" content={hexForTheme(theme)}></meta>
  </Head>
);

export default Theme;

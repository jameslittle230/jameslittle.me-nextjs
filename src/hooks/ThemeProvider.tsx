import Head from "next/head";
import { createContext, useState, useContext } from "react";

export type ThemeColor = "green" | "blue" | "orange";

export const ThemeContext = createContext<{
  theme: ThemeColor;
  setTheme: (color: ThemeColor) => void;
}>({
  theme: "green",
  setTheme(_color) {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState<ThemeColor>("green");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Head>
        <style>{`body {--theme-hue: var(--${theme}-hue)}`}</style>
      </Head>
      {children}
    </ThemeContext.Provider>
  );
};

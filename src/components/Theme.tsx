import Head from "next/head";
import { createContext, useState, useContext } from "react";

export type ThemeColor = "green" | "blue" | "orange";

const Theme = ({ theme }: {theme: ThemeColor}) => (
  <Head>
    <style>{`body {--theme-hue: var(--${theme}-hue)}`}</style>
    <meta name="theme-color" content="#4285f4"></meta>
  </Head>
);

export default Theme;

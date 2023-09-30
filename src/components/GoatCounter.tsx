"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    goatcounter: {
      count: (_: { path: string }) => void;
    };
  }
}

export const GoatCounter = () => {
  useEffect(() => {
    if (!window) return;

    if (process.env.NODE_ENV === "development") {
      return;
    }

    const script = document.createElement("script");
    script.src = "//gc.zgo.at/count.js";
    script.async = true;
    script.dataset.goatcounter = "https://jil.goatcounter.com/count";
    script.dataset.goatcounterSettings = JSON.stringify({
      allow_local: true,
    });
    document.body.appendChild(script);
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    window.goatcounter?.count({
      path: location.pathname + location.search + location.hash,
    });
  }, [pathname]);

  return null;
};

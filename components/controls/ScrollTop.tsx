// components/ScrollTop.tsx
"use client";

import { useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => {
    // Disable browser restoring scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Run on load
    scrollToTop();

    // Run on back/forward navigation
    window.addEventListener("pageshow", scrollToTop);

    return () => {
      window.removeEventListener("pageshow", scrollToTop);
    };
  }, []);

  return null;
}
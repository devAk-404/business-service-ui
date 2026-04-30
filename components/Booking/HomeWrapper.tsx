"use client";

import { useEffect } from "react";

export default function HomeWrapper({ children }: any) {
  useEffect(() => {
    const handlePageShow = () => {
      window.scrollTo(0, 0);
    };

    // Runs on normal load + back/forward cache restore
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return children;
}
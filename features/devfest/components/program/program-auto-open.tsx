"use client";

import { useEffect } from "react";

export function ProgramAutoOpen() {
  useEffect(() => {
    if (window.location.hash) return;

    const program = document.getElementById("program");
    if (!program) return;

    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}#program`,
    );
    program.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);

  return null;
}

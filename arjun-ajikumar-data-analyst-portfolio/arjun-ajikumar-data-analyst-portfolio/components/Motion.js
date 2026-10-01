"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds .is-in once each entrance animation ends, or right away if animations never run.
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const els = [...document.querySelectorAll(".appear:not(.is-in), .hero-photo:not(.is-in)")];
    const cleanups = els.map((el) => {
      const done = (e) => { if (e.target === el) el.classList.add("is-in"); };
      el.addEventListener("animationend", done);
      return () => el.removeEventListener("animationend", done);
    });

    let r2 = 0;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => {
        els.forEach((el) => {
          const anims = el.getAnimations ? el.getAnimations() : [];
          if (!anims.some((a) => a.playState === "running" || a.playState === "finished")) el.classList.add("is-in");
        });
      });
    });

    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}

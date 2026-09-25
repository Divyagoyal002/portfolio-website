import { useEffect } from "react";
import Lenis from "lenis";

// Shared handle so overlays (e.g. modals) can pause page scrolling.
export const lenisRef: { current: Lenis | null } = { current: null };

// Buttery scroll + smooth in-page anchor navigation. Disabled for reduced-motion users.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.15, anchors: { offset: -72 } });
    lenisRef.current = lenis;
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}

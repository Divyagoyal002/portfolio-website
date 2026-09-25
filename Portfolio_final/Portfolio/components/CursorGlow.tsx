import { useEffect, useRef } from "react";

// A soft light that trails the cursor (pointer devices only).
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current!;
    let x = -500, y = -500, cx = x, cy = y, raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const tick = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-60 blur-3xl"
      style={{
        background: "radial-gradient(circle, rgba(139,108,255,0.13), rgba(47,217,240,0.05) 45%, transparent 70%)",
        transform: "translate3d(-900px,-900px,0)",
      }}
    />
  );
}

import { useEffect, useRef } from "react";

// Layered, speech-like sine waves drawn on canvas. The cursor bends the amplitude.
export default function Waveform({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, t = 0;
    let target = 0.6, energy = 0.6;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e: PointerEvent) => {
      target = 0.35 + (1 - e.clientY / window.innerHeight) * 0.9;
    };

    const waves = [
      { color: "139,108,255", freq: 1.6, speed: 0.9, amp: 1, width: 2 },
      { color: "47,217,240", freq: 2.3, speed: -1.2, amp: 0.7, width: 1.5 },
      { color: "244,114,182", freq: 1.1, speed: 0.6, amp: 0.55, width: 1.2 },
      { color: "255,255,255", freq: 3.1, speed: 1.6, amp: 0.3, width: 0.8 },
    ];

    const draw = () => {
      t += 0.012;
      // "Syllable" envelope: bursts of energy like someone talking
      const speech = 0.55 + 0.45 * Math.abs(Math.sin(t * 1.7) * Math.sin(t * 0.63 + 1.2));
      energy += (target * speech - energy) * 0.05;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const wave of waves) {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 3) {
          const p = x / w;
          const taper = Math.sin(Math.PI * p) ** 2; // fade out at both ends
          const y =
            h / 2 +
            Math.sin(p * Math.PI * 2 * wave.freq + t * wave.speed * 3) *
              Math.sin(p * Math.PI * 3 + t) *
              taper * wave.amp * energy * h * 0.32;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        grad.addColorStop(0, `rgba(${wave.color},0)`);
        grad.addColorStop(0.5, `rgba(${wave.color},0.9)`);
        grad.addColorStop(1, `rgba(${wave.color},0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = wave.width;
        ctx.shadowColor = `rgba(${wave.color},0.8)`;
        ctx.shadowBlur = 12;
        ctx.stroke();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}

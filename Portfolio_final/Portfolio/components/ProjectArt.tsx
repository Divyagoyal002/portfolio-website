import type { Category } from "@/data/portfolio";

// Small generative illustration per category, tinted with the project's accent.
export default function ProjectArt({ category, accent }: { category: Category; accent: string }) {
  if (category === "Voice AI") {
    return (
      <div className="flex h-full items-center justify-center gap-[5px]">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="w-[4px] rounded-full"
            style={{
              background: accent,
              height: `${20 + Math.abs(Math.sin(i * 0.7)) * 60}%`,
              opacity: 0.35 + Math.abs(Math.sin(i * 0.45)) * 0.65,
              animation: `eq 1.${(i % 7) + 2}s ease-in-out ${i * 0.05}s infinite alternate`,
            }}
          />
        ))}
        <style>{`@keyframes eq{to{transform:scaleY(.35)}}`}</style>
      </div>
    );
  }

  if (category === "Agents & GenAI") {
    const pts = [
      [50, 50], [18, 22], [82, 20], [16, 78], [84, 80], [50, 12], [50, 90],
    ];
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        {pts.slice(1).map(([x, y], i) => (
          <line key={i} x1={50} y1={50} x2={x} y2={y} stroke={accent} strokeOpacity={0.5} strokeWidth={0.6} className="dash-flow" />
        ))}
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 0 ? 7 : 3.2} fill={i === 0 ? accent : "transparent"} stroke={accent} strokeWidth={0.8}>
            {i > 0 && <animate attributeName="r" values="3;4.4;3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />}
          </circle>
        ))}
      </svg>
    );
  }

  if (category === "Research") {
    return (
      <svg viewBox="0 0 200 100" className="h-full w-full" preserveAspectRatio="none">
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${20 + i * 8} C 50 ${5 + i * 9}, 90 ${45 + i * 6}, 140 ${22 + i * 8} S 200 ${30 + i * 7}, 220 ${18 + i * 8}`}
            fill="none"
            stroke={accent}
            strokeOpacity={0.15 + i * 0.07}
            strokeWidth={0.8}
          >
            <animateTransform attributeName="transform" type="translate" values={`0 0; ${-6 + i} 2; 0 0`} dur={`${5 + i * 0.4}s`} repeatCount="indefinite" />
          </path>
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 60" className="h-full w-full">
      {Array.from({ length: 36 }).map((_, i) => {
        const x = 8 + ((i * 37) % 84);
        const y = 52 - x * 0.45 + ((i * 13) % 17) - 8;
        return <circle key={i} cx={x} cy={y} r={1.4} fill={accent} fillOpacity={0.4 + ((i * 7) % 10) / 20} />;
      })}
      <line x1={6} y1={50} x2={94} y2={10} stroke={accent} strokeWidth={0.8} strokeDasharray="3 2" />
    </svg>
  );
}

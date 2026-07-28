/**
 * Signaturelement der Seite: ein ambientes Datenfluss-Diagramm im Hero-Hintergrund.
 * Reine SVG/CSS-Animation (kein Client-JS nötig), respektiert prefers-reduced-motion
 * über die globale Regel in globals.css. Dient als Atmosphäre, nicht als Ablenkung –
 * daher niedrige Opazität und keine Interaktion mit dem Vordergrundtext.
 */
export function HeroBackground() {
  const lanes = [
    { y: 60, delay: "0s", color: "var(--color-accent-blue)" },
    { y: 140, delay: "-2.4s", color: "var(--color-accent-violet)" },
    { y: 220, delay: "-4.1s", color: "var(--color-accent-blue)" },
    { y: 300, delay: "-1.2s", color: "var(--color-accent-violet)" },
  ];

  const nodesPerLane = [90, 260, 430, 600, 770];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 900 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full opacity-[0.35] dark:opacity-[0.28]">
        <line x1="0" y1="0" x2="0" y2="0" />
        {lanes.map((lane) => (
          <g key={lane.y}>
            <line x1="0" y1={lane.y} x2="900" y2={lane.y} stroke="var(--color-border)" strokeWidth="1" />
            <line
              x1="0"
              y1={lane.y}
              x2="900"
              y2={lane.y}
              stroke={lane.color}
              strokeWidth="2"
              strokeDasharray="14 220"
              className="hero-pipeline-flow"
              style={{ animationDelay: lane.delay }}
            />
            {nodesPerLane.map((x) => (
              <circle key={x} cx={x} cy={lane.y} r="4" fill="var(--color-background)" stroke={lane.color} strokeWidth="1.5" />
            ))}
          </g>
        ))}
      </svg>

      <style>{`
        .hero-pipeline-flow {
          animation: hero-pipeline-dash 7s linear infinite;
        }
        @keyframes hero-pipeline-dash {
          to {
            stroke-dashoffset: -234;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}

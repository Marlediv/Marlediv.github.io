/**
 * Atmosphaerischer Datenfluss fuer den Hero.
 * Das Motiv besteht ausschliesslich aus neutralen Leitungen, Knoten und Lichtfeldern;
 * es bildet weder ein Logo noch eine Vier-Felder-Form nach.
 */
export function HeroBackground() {
  const lanes = [
    { y: 72, delay: "0s", opacity: 0.8 },
    { y: 148, delay: "-2.4s", opacity: 0.5 },
    { y: 224, delay: "-4.1s", opacity: 0.7 },
    { y: 300, delay: "-1.2s", opacity: 0.45 },
  ];

  const nodesPerLane = [72, 238, 414, 590, 768];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-24 -top-44 h-[34rem] w-[34rem] rounded-full bg-accent-blue/10 blur-[110px]" />
      <div className="absolute -left-48 bottom-0 h-[26rem] w-[26rem] rounded-full bg-accent-violet/8 blur-[110px]" />

      <svg
        viewBox="0 0 900 380"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-[0.48] dark:opacity-[0.42]"
      >
        <defs>
          <linearGradient id="lane-fade" x1="0" x2="1">
            <stop offset="0" stopColor="var(--color-accent-blue)" stopOpacity="0" />
            <stop offset="0.18" stopColor="var(--color-accent-blue)" stopOpacity="0.5" />
            <stop offset="0.75" stopColor="var(--color-accent-blue)" stopOpacity="0.2" />
            <stop offset="1" stopColor="var(--color-accent-blue)" stopOpacity="0" />
          </linearGradient>
          <filter id="cyan-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lanes.map((lane) => (
          <g key={lane.y} opacity={lane.opacity}>
            <line x1="0" y1={lane.y} x2="900" y2={lane.y} stroke="url(#lane-fade)" strokeWidth="1" />
            <line
              x1="0"
              y1={lane.y}
              x2="900"
              y2={lane.y}
              stroke="var(--color-accent-blue)"
              strokeWidth="1.5"
              strokeDasharray="24 260"
              filter="url(#cyan-glow)"
              className="hero-pipeline-flow"
              style={{ animationDelay: lane.delay }}
            />
            {nodesPerLane.map((x, index) => (
              <g key={x}>
                <circle cx={x} cy={lane.y} r="9" fill="var(--color-accent-blue)" opacity="0.05" />
                <circle
                  cx={x}
                  cy={lane.y}
                  r={index % 2 === 0 ? 3 : 2}
                  fill="var(--color-background)"
                  stroke="var(--color-accent-blue)"
                  strokeWidth="1.2"
                />
              </g>
            ))}
          </g>
        ))}
      </svg>

      <style>{`
        .hero-pipeline-flow {
          animation: hero-pipeline-dash 8s linear infinite;
        }
        @keyframes hero-pipeline-dash {
          to {
            stroke-dashoffset: -284;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
    </div>
  );
}

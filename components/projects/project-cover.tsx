type CoverVariant = "pipeline" | "streaming" | "assistant" | "quality";

/**
 * Abstrakte, lokal generierte SVG-Cover pro Projekttyp – keine externen Bilder,
 * keine Stockfotos. Jede Variante deutet den technischen Charakter des Projekts an.
 */
export function ProjectCover({ variant, className }: { variant: CoverVariant; className?: string }) {
  const commonProps = {
    viewBox: "0 0 400 240",
    className: className ?? "h-full w-full",
    role: "img" as const,
    "aria-hidden": true,
  };

  if (variant === "pipeline") {
    return (
      <svg {...commonProps}>
        <rect width="400" height="240" fill="var(--color-surface)" />
        {[40, 140, 240, 340].map((x, i) => (
          <g key={x}>
            <rect x={x - 22} y="100" width="44" height="40" rx="8" fill="var(--color-background-elevated)" stroke="var(--color-border-strong)" />
            {i < 3 && (
              <line x1={x + 22} y1="120" x2={x + 96} y2="120" stroke="var(--color-accent-blue)" strokeWidth="2" strokeDasharray="6 5" />
            )}
          </g>
        ))}
        <circle cx="40" cy="120" r="3" fill="var(--color-accent-blue)" />
        <circle cx="340" cy="120" r="3" fill="var(--color-accent-violet)" />
      </svg>
    );
  }

  if (variant === "streaming") {
    return (
      <svg {...commonProps}>
        <rect width="400" height="240" fill="var(--color-surface)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M -20 ${60 + i * 30} C 100 ${40 + i * 30}, 200 ${90 + i * 24}, 420 ${50 + i * 26}`}
            fill="none"
            stroke={i % 2 === 0 ? "var(--color-accent-blue)" : "var(--color-accent-violet)"}
            strokeOpacity={0.35 + i * 0.08}
            strokeWidth="2"
          />
        ))}
        <circle cx="330" cy="70" r="4" fill="var(--color-accent-blue)" />
        <circle cx="200" cy="130" r="4" fill="var(--color-accent-violet)" />
      </svg>
    );
  }

  if (variant === "assistant") {
    return (
      <svg {...commonProps}>
        <rect width="400" height="240" fill="var(--color-surface)" />
        <rect x="60" y="50" width="280" height="140" rx="14" fill="var(--color-background-elevated)" stroke="var(--color-border-strong)" />
        <line x1="90" y1="90" x2="240" y2="90" stroke="var(--color-accent-blue)" strokeWidth="3" strokeLinecap="round" />
        <line x1="90" y1="112" x2="310" y2="112" stroke="var(--color-border-strong)" strokeWidth="3" strokeLinecap="round" />
        <line x1="90" y1="134" x2="270" y2="134" stroke="var(--color-border-strong)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="90" cy="160" r="5" fill="var(--color-accent-violet)" />
        <line x1="106" y1="160" x2="200" y2="160" stroke="var(--color-accent-violet)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect width="400" height="240" fill="var(--color-surface)" />
      <g>
        {[0, 1, 2, 3, 4, 5].map((row) =>
          [0, 1, 2, 3, 4, 5, 6].map((col) => {
            const flagged = (row * 7 + col) % 11 === 0;
            return (
              <rect
                key={`${row}-${col}`}
                x={40 + col * 46}
                y={40 + row * 30}
                width="34"
                height="20"
                rx="4"
                fill={flagged ? "var(--color-accent-blue)" : "var(--color-background-elevated)"}
                stroke="var(--color-border-strong)"
                strokeOpacity={flagged ? 0 : 1}
              />
            );
          }),
        )}
      </g>
    </svg>
  );
}

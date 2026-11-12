import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

// Als statischer Route Handler statt `opengraph-image.tsx`: so entsteht im Export eine
// Datei mit `.png`-Endung, die GitHub Pages mit korrektem Content-Type ausliefert.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #11191c 0%, #16262a 60%, #0f3a40 100%)",
          color: "#edfafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#20dce5", letterSpacing: 6 }}>
          {siteConfig.title.toUpperCase()} · {siteConfig.region.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{siteConfig.fullName}</div>
          <div style={{ marginTop: 28, width: 220, height: 4, background: "#20dce5" }} />
          <div style={{ marginTop: 32, fontSize: 34, lineHeight: 1.35, color: "#9aadb0", maxWidth: 940 }}>
            Datenintegration, SQL-Validierung, Datenmodellierung und kontrollierte ERP-Stammdatenmigration.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

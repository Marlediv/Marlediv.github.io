import type { NextConfig } from "next";

// GitHub Pages liefert nur statische Dateien aus – ein Node.js-Server (für
// `headers()`, Route Handler mit POST etc.) steht dort nicht zur Verfügung.
// Daher: statischer Export statt `output: "standalone"`, keine `headers()`-
// Konfiguration (von Next.js bei `output: "export"` ohnehin nicht unterstützt).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
};

export default nextConfig;

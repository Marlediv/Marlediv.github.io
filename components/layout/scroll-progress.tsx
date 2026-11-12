/**
 * Lesefortschritt am oberen Seitenrand. Rein per CSS über Scroll-driven
 * Animations umgesetzt (siehe `.scroll-progress` in globals.css) – ohne
 * JavaScript. Browser ohne Unterstützung blenden die Leiste einfach aus.
 */
export function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}

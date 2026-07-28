"use client";

/**
 * Optionale Consent-Komponente.
 *
 * Diese Komponente ist bewusst NICHT in app/layout.tsx eingebunden, da die Website aktuell
 * keine zustimmungspflichtigen Tracking-Dienste einsetzt. Sollte künftig z. B. ein
 * Analyse-Tool hinzukommen, kann <CookieConsent /> im Layout ergänzt werden.
 */

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";
const CONSENT_EVENT = "cookie-consent-updated";

function subscribe(callback: () => void) {
  document.addEventListener(CONSENT_EVENT, callback);
  return () => document.removeEventListener(CONSENT_EVENT, callback);
}

export function CookieConsent() {
  // Liest den Consent-Status direkt aus localStorage (externes System) statt über setState-in-effect.
  // Server-seitig konsistent "bereits entschieden" (also nicht sichtbar), bis der Client bestätigt hat.
  const hasStoredConsent = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(STORAGE_KEY) !== null,
    () => true,
  );

  function respond(value: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, value);
    document.dispatchEvent(new Event(CONSENT_EVENT));
  }

  if (hasStoredConsent) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-xl backdrop-blur"
    >
      <p className="text-sm text-foreground">
        Diese Website verwendet aktuell nur technisch notwendige Funktionen. Sobald zusätzliche,
        zustimmungspflichtige Dienste eingesetzt werden, kannst du hier zustimmen oder ablehnen.
      </p>
      <div className="mt-4 flex gap-3">
        <Button size="sm" onClick={() => respond("accepted")}>
          Zustimmen
        </Button>
        <Button size="sm" variant="secondary" onClick={() => respond("declined")}>
          Ablehnen
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard-API nicht verfügbar – kein hartes Fehlverhalten nötig.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
      aria-label="E-Mail-Adresse kopieren"
    >
      {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
      {copied ? "Kopiert" : "Kopieren"}
    </button>
  );
}

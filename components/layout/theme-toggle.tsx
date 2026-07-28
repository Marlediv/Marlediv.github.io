"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Client-only mount check ohne setState-in-effect: liefert server-seitig immer `false`,
  // client-seitig ab dem ersten Render `true` (verhindert Hydration-Mismatch/Flackern).
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Zu hellem Design wechseln" : "Zu dunklem Design wechseln"}
      className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-border text-foreground transition-colors hover:bg-surface-hover"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/content/projects";
import { ProjectGrid } from "./project-grid";
import { cn } from "@/lib/utils";

export function ProjectFilter() {
  const [active, setActive] = useState<ProjectCategory | "Alle">("Alle");

  const filtered = useMemo(() => {
    if (active === "Alle") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  const options: (ProjectCategory | "Alle")[] = ["Alle", ...projectCategories];

  return (
    <div>
      <div role="group" aria-label="Projekte nach Kategorie filtern" className="mb-8 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setActive(option)}
            aria-pressed={active === option}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === option
                ? "border-accent-blue bg-accent-blue text-accent-blue-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-border-strong",
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <ProjectGrid projects={filtered} />
    </div>
  );
}

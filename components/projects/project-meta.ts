import type { EvidenceType, Project, ProjectType } from "@/content/projects";

export const statusLabel: Record<Project["status"], string> = {
  active: "Laufend",
  completed: "Abgeschlossen",
  "in-development": "In Entwicklung",
};

export const projectTypeLabel: Record<ProjectType, string> = {
  professional: "Berufliches Projekt",
  portfolio: "Portfolio-Projekt",
  education: "Abschlussprojekt",
  personal: "Eigenes Projekt",
};

export const evidenceTypeLabel: Record<EvidenceType, string> = {
  repository: "Quellcode",
  documentation: "Dokumentation",
  confidential: "Vertraulich",
  demo: "Demo",
};

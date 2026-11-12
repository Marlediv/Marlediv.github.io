import { ArrowLeftRight, ShieldCheck, Workflow, Boxes, FileText } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

const focusAreas = [
  { label: "Datenintegration & ERP-Migration", icon: ArrowLeftRight },
  { label: "SQL-Validierung & Datenqualität", icon: ShieldCheck },
  { label: "ETL/ELT-Pipelines", icon: Workflow },
  { label: "Datenmodellierung", icon: Boxes },
  { label: "Dokumentation & Prozessanalyse", icon: FileText },
];

export function TrustBar() {
  return (
    <section aria-label="Schwerpunkte" className="border-b border-border py-10">
      <PageContainer>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-center">
          {focusAreas.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Icon size={16} className="text-accent-blue" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

import { Database, Cloud, Workflow, LineChart, Sparkles } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";

const focusAreas = [
  { label: "Data Platforms", icon: Database },
  { label: "Cloud Engineering", icon: Cloud },
  { label: "Automation", icon: Workflow },
  { label: "Analytics", icon: LineChart },
  { label: "AI Solutions", icon: Sparkles },
];

export function TrustBar() {
  return (
    <section className="border-b border-border py-10">
      <PageContainer>
        <div className="flex flex-wrap items-center justify-between gap-6">
          {focusAreas.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Icon size={16} className="text-accent-blue" />
              {label}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

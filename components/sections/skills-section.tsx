import { skillCategories } from "@/content/skills";
import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section className="border-b border-border py-20">
      <PageContainer>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Kompetenzbereiche</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Technologien, mit denen ich arbeite
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.id} className="p-6">
              <h3 className="font-display text-base font-semibold text-foreground">{category.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{category.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

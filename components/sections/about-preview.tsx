import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="border-b border-border py-20">
      <PageContainer narrow>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Über mich</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Vom Prozessverständnis in der Logistik zur Datenarchitektur
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Mein Weg in die Datenwelt begann nicht am Whiteboard, sondern im operativen Geschäft: in der
          E-Commerce-Logistik habe ich gelernt, wie Prozesse tatsächlich ablaufen – und wo Daten sie erst
          wirklich steuerbar machen. Diese praktische Perspektive bringe ich heute in den Aufbau von
          Datenplattformen ein, die nicht nur technisch sauber, sondern auch geschäftlich sinnvoll sind.
        </p>
        <Button href="/ueber-mich" variant="secondary" className="mt-6">
          Mehr über meinen Werdegang <ArrowRight size={15} />
        </Button>
      </PageContainer>
    </section>
  );
}

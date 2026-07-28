import { certifications } from "@/content/certifications";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CertificationsSection() {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-foreground">Zertifizierungen</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Beispielhafte Darstellung – als „Beispiel&rdquo; gekennzeichnete Einträge sind noch nicht tatsächlich
        erworben und dienen hier nur der Veranschaulichung des Layouts.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <Card key={cert.title} className="flex items-start justify-between gap-3 p-5">
            <div>
              <p className="font-display text-sm font-semibold text-foreground">{cert.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
            {cert.isPlaceholder && <Badge variant="outline">Beispiel</Badge>}
          </Card>
        ))}
      </div>
    </div>
  );
}

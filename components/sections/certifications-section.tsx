import { certifications } from "@/content/certifications";
import { Card } from "@/components/ui/card";

export function CertificationsSection() {
  if (certifications.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-foreground">Abschlüsse & Zertifikate</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <Card key={cert.title} className="flex items-start justify-between gap-3 p-5">
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                {cert.credentialUrl ? (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue">
                    {cert.title}
                  </a>
                ) : (
                  cert.title
                )}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
            {cert.year && <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>}
          </Card>
        ))}
      </div>
    </div>
  );
}

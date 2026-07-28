# Marco – Data Engineer Portfolio

Produktionsreife, persönliche Portfolio-Website für Marco (Data Engineer), gebaut mit dem Next.js App Router.
Designsystem: **"Signalfluss"** – Anthrazit/Schwarz mit elektrischem Blau und zurückhaltendem Violett als Akzente.

*(Screenshot-Platzhalter – nach dem ersten `npm run dev` einen eigenen Screenshot ergänzen.)*

## Features

- Next.js App Router, vollständig typisiert (TypeScript)
- Dark Mode / Light Mode / System-Theme ohne Flackern (`next-themes`)
- Zentrale Content-Verwaltung unter `/content` (keine hartcodierten Texte in Komponenten)
- Projektübersicht mit Kategorie-Filter, Projekt-Detailseiten
- Vollständiges Blog-System mit MDX: Tags, Kategorien, Lesedauer, Suche, Filter, Pagination, Inhaltsverzeichnis, Syntax-Highlighting, verwandte Beiträge
- Kontaktformular mit React Hook Form + Zod, Honeypot-Spamschutz, serverseitiger Validierung, Resend-Integration (mit funktionierendem Dev-Fallback ohne API-Key)
- GitHub-Integration (öffentliche API, serverseitiges Caching, robuste Fehlerbehandlung bei Rate-Limit/Ausfall)
- SEO: Metadata API, Open Graph, Twitter Cards, dynamische `sitemap.xml` & `robots.txt`, JSON-LD (Person, WebSite, BlogPosting, Breadcrumb)
- Barrierefreiheit: Skip-Link, sichtbare Fokuszustände, semantisches HTML, `prefers-reduced-motion`
- Sicherheits-Header (inkl. vorbereiteter CSP), Honeypot, serverseitige Validierung
- Lokale, abstrakte SVG-Grafiken statt Stockfotos
- Vorbereitete (nicht standardmäßig aktive) Cookie-Consent-Komponente

## Tech-Stack

Next.js (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide Icons · MDX (`next-mdx-remote`) · Zod · React Hook Form · next-themes · Resend · Fontsource (self-hosted Manrope/Inter/JetBrains Mono)

## Voraussetzungen

- Node.js 20 oder neuer
- npm

## Installation

```bash
npm install
```

## Lokale Entwicklung

```bash
npm run dev
```

Die Seite ist danach unter `http://localhost:3000` erreichbar. Das Kontaktformular funktioniert auch **ohne**
konfigurierten `RESEND_API_KEY` – Nachrichten werden dann nur in der Server-Konsole protokolliert und der
Nutzer erhält eine klare Erfolgsmeldung, die das kenntlich macht.

## Konfiguration

1. `.env.example` nach `.env.local` kopieren und Werte eintragen:

```bash
cp .env.example .env.local
```

| Variable | Beschreibung |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Basis-URL, wird für Metadata, Sitemap und Canonical-Links verwendet |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub-Benutzername für die GitHub-Sektion auf der Startseite |
| `RESEND_API_KEY` | API-Key von resend.com für den E-Mail-Versand des Kontaktformulars |
| `CONTACT_EMAIL` | Ziel-E-Mail-Adresse für eingehende Kontaktanfragen |

## Inhalte bearbeiten

Alle persönlichen Inhalte liegen zentral unter `/content` – Komponenten lesen ausschließlich von dort:

| Datei | Inhalt |
|---|---|
| `content/site-config.ts` | Name, Titel, Kontaktdaten, Links, Verfügbarkeit |
| `content/navigation.ts` | Haupt- und Footer-Navigation |
| `content/projects.ts` | Projekte (Datenmodell `Project`) |
| `content/skills.ts` | Kompetenzkategorien |
| `content/experience.ts` | Berufserfahrung / Timeline |
| `content/certifications.ts` | Zertifizierungen (aktuell mit `isPlaceholder: true` gekennzeichnete Beispiele) |
| `content/social-links.ts` | Social-Media-Links |
| `content/blog/*.mdx` | Blogartikel |

### Projekt hinzufügen

Neuen Eintrag in `content/projects.ts` im `projects`-Array ergänzen (Typ `Project`). Für das Cover eine der
vier vorhandenen `coverVariant`-Optionen wählen (`pipeline`, `streaming`, `assistant`, `quality`) oder eine
neue Variante in `components/projects/project-cover.tsx` ergänzen. Die Detailseite unter
`/projekte/[slug]` wird automatisch über `generateStaticParams` erzeugt.

### Blogartikel hinzufügen

Neue `.mdx`-Datei unter `content/blog/` anlegen, mit Frontmatter:

```mdx
---
title: "Titel des Artikels"
description: "Kurze Beschreibung für SEO und Vorschau."
date: "2026-06-01"
category: "Data Engineering"
tags: ["Tag1", "Tag2"]
---

Inhalt in Markdown/MDX …
```

Die Übersichtsseite, Suche, Filter, Sitemap und verwandte Beiträge aktualisieren sich automatisch.

### Lebenslauf hinterlegen

PDF unter `public/documents/marco-cv.pdf` ablegen (Pfad ist zentral in `content/site-config.ts` unter
`resumeUrl` konfigurierbar).

### GitHub-Integration konfigurieren

`NEXT_PUBLIC_GITHUB_USERNAME` in `.env.local` setzen (oder `githubUsername` in `content/site-config.ts`
anpassen). Die Sektion nutzt ausschließlich die öffentliche GitHub-API, benötigt keinen Token und
funktioniert auch bei Rate-Limit oder Netzwerkfehler robust weiter (mit Fallback-Hinweis).

### Kontaktformular konfigurieren

`RESEND_API_KEY` und `CONTACT_EMAIL` in `.env.local` setzen. Ohne diese Variablen läuft das Formular im
Entwicklungsmodus weiter (siehe oben). In `app/api/contact/route.ts` kann bei Bedarf der Versandtext oder
Absender angepasst werden.

## Verfügbare Scripts

```bash
npm run dev      # Entwicklungsserver
npm run build    # Produktions-Build
npm run start    # Produktionsserver (nach build)
npm run lint     # ESLint
```

## Projektstruktur

```text
app/                     # Next.js App Router (Seiten, Layouts, API-Routen)
  projekte/[slug]/       # Dynamische Projekt-Detailseiten
  blog/[slug]/           # Dynamische Blogartikel-Seiten
  api/contact/           # Kontaktformular-API-Route
  sitemap.ts, robots.ts  # SEO-Dateien
components/
  layout/                # Header, Footer, Navigation, Theme, Scroll-Progress …
  sections/              # Homepage-/Seiten-Sektionen
  projects/              # Projektkarten, -grid, -filter, -detail, Cover-SVGs
  blog/                  # Artikelkarten, -liste, Inhaltsverzeichnis, Code-Block
  contact/               # Kontaktformular, Copy-Button
  ui/                    # Wiederverwendbare UI-Grundbausteine
content/                 # Zentrale, editierbare Inhalte (siehe oben)
lib/                     # Utilities (cn-Helper, Blog-Loader, Zod-Schema)
public/documents/        # Ablageort für Lebenslauf-PDF
```

## Deployment

### Vercel

1. Repository zu GitHub pushen.
2. Auf vercel.com importieren.
3. Umgebungsvariablen aus `.env.example` im Vercel-Dashboard hinterlegen.
4. Deploy – Vercel erkennt Next.js automatisch, kein weiteres Setup nötig.

### Docker

```bash
docker build -t marco-portfolio .
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_GITHUB_USERNAME=marlediv \
  -e RESEND_API_KEY=... \
  -e CONTACT_EMAIL=... \
  marco-portfolio
```

Das `Dockerfile` nutzt Next.js' `output: "standalone"` für ein schlankes Produktions-Image (Multi-Stage-Build).

### Netlify

Kompatibel über den offiziellen Next.js-Runtime-Adapter von Netlify; Umgebungsvariablen analog zu Vercel im
Netlify-Dashboard hinterlegen.

## Accessibility

Ziel ist WCAG 2.1 AA: semantisches HTML, sichtbare Fokuszustände, Skip-to-Content-Link, ausreichende
Kontraste in Dark & Light Mode, `prefers-reduced-motion`-Unterstützung, verständliche Formularfehler mit
`aria-invalid`/`role="alert"`.

## SEO

Next.js Metadata API pro Seite, dynamische Metadaten für Projekte und Blogartikel, Open Graph & Twitter
Cards, Canonical URLs, dynamische `sitemap.xml`/`robots.txt`, strukturierte Daten (Person, WebSite,
BlogPosting, Breadcrumb).

## Rechtliche Hinweise

Die Texte unter `/impressum` und `/datenschutz` sind **Musterinhalte** und deutlich als solche
gekennzeichnet. Sie ersetzen **keine Rechtsberatung** und müssen vor der Veröffentlichung durch eine
fachkundige Person geprüft und an die tatsächlich genutzten Dienste angepasst werden.

## Lizenz

Privates Projekt. Keine Lizenz zur freien Weiternutzung vorgesehen, sofern nicht separat vereinbart.

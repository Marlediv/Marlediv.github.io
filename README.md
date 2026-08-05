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
- Kontaktformular mit React Hook Form + Zod, Honeypot-Spamschutz; öffnet beim Absenden das E-Mail-Programm mit vorausgefüllter Nachricht (`mailto:`) – funktioniert vollständig statisch, ohne eigenen Server
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

Die Seite ist danach unter `http://localhost:3000` erreichbar.

## Konfiguration

1. `.env.example` nach `.env.local` kopieren und Werte eintragen:

```bash
cp .env.example .env.local
```

| Variable | Beschreibung |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Basis-URL, wird für Metadata, Sitemap und Canonical-Links verwendet |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub-Benutzername für die GitHub-Sektion auf der Startseite |

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

Das Kontaktformular sendet keine Daten an einen eigenen Server. Beim Absenden öffnet es das E-Mail-Programm
mit einer vorausgefüllten Nachricht an `siteConfig.email` (`mailto:`-Link), damit der Versand auch auf dem
rein statischen GitHub-Pages-Hosting ohne Node.js-Server funktioniert. Der Empfänger und die
E-Mail-Vorlage lassen sich in `components/contact/contact-form.tsx` anpassen.

## Verfügbare Scripts

```bash
npm run dev      # Entwicklungsserver
npm run build    # Produktions-Build
npm run start    # Produktionsserver (nach build)
npm run lint     # ESLint
```

## Projektstruktur

```text
app/                     # Next.js App Router (Seiten, Layouts)
  projekte/[slug]/       # Dynamische Projekt-Detailseiten
  blog/[slug]/           # Dynamische Blogartikel-Seiten
  sitemap.ts, robots.ts  # SEO-Dateien (statisch generiert)
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

Aktiver Deployment-Weg ist **GitHub Pages** über statischen Next.js-Export (`output: "export"` in
`next.config.ts`). Die folgenden Wege (Vercel, Docker, Netlify) sind **aktuell nicht aktiv** – sie setzen
einen laufenden Node.js-Server voraus und sind mit `output: "export"` nicht kompatibel. Um sie wieder zu
nutzen, müsste `next.config.ts` auf `output: "standalone"` (oder Default) zurückgestellt und die
Kontakt-API-Route wiederhergestellt werden. Sie sind hier nur als Referenz für einen möglichen späteren
Wechsel des Hosting-Modells dokumentiert.

### GitHub Pages (aktiv)

Die Website wird bei jedem Push auf `main` automatisch über den Workflow
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) gebaut und veröffentlicht:

1. `npm ci`, `npm run lint`, `npm run build` (Next.js erzeugt dabei den statischen Export im Ordner `out/`).
2. `NEXT_PUBLIC_SITE_URL` wird im Workflow fest auf `https://marlediv.github.io` gesetzt.
3. `out/` wird über die offiziellen Actions `actions/configure-pages`, `actions/upload-pages-artifact` und
   `actions/deploy-pages` veröffentlicht.
4. Der Workflow lässt sich zusätzlich manuell über „Run workflow“ (`workflow_dispatch`) starten.

**Einmalige manuelle Einrichtung in GitHub** (nicht durch Code abbildbar):

1. Unter `Settings → Pages → Build and deployment` als Quelle **GitHub Actions** auswählen.
2. Nach dem nächsten Workflowlauf ist die Seite unter `https://marlediv.github.io/` erreichbar.
3. Live-Seite sowie direkte Aufrufe von Unterseiten (z. B. `/projekte/`, `/blog/`) im Browser prüfen.

**Bekannte Einschränkungen des statischen Exports:**

- Das Kontaktformular sendet nicht mehr über eine eigene API-Route/Resend, sondern öffnet einen
  vorausgefüllten `mailto:`-Link im E-Mail-Programm der Nutzerin/des Nutzers (siehe unten).
- Die zuvor über `next.config.ts` gesetzten HTTP-Sicherheits-Header (CSP, `X-Frame-Options` usw.) entfallen,
  da GitHub Pages keine benutzerdefinierten Response-Header für einen statischen Next.js-Export unterstützt.
- Eine eigene Domain ist nicht Teil dieses Deployment-Wegs und folgt in einem späteren Arbeitsschritt.

### Vercel (aktuell inaktiv)

1. Repository zu GitHub pushen.
2. Auf vercel.com importieren.
3. Umgebungsvariablen aus `.env.example` im Vercel-Dashboard hinterlegen.
4. `output: "export"` in `next.config.ts` entfernen bzw. auf Standard zurücksetzen, damit Vercel den
   Server-Modus von Next.js nutzen kann.

### Docker (aktuell inaktiv)

```bash
docker build -t marco-portfolio .
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_GITHUB_USERNAME=marlediv \
  marco-portfolio
```

Das `Dockerfile` erwartet `output: "standalone"` für ein schlankes Produktions-Image (Multi-Stage-Build).
Mit dem aktuell aktiven `output: "export"` erzeugt `next build` keinen `.next/standalone`-Ordner mehr – für
einen Docker-Betrieb müsste `next.config.ts` entsprechend angepasst werden.

### Netlify (aktuell inaktiv)

Kompatibel über den offiziellen Next.js-Runtime-Adapter von Netlify, sofern `output: "export"` nicht aktiv
ist; Umgebungsvariablen analog zu Vercel im Netlify-Dashboard hinterlegen.

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

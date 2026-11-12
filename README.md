# Marco Grochowiak – Data Engineer Portfolio

Persönliche Portfolio-Website, gebaut mit dem Next.js App Router und als statischer Export über
GitHub Pages veröffentlicht: <https://marlediv.github.io/>

## Tech-Stack

Next.js 16 (App Router, `output: "export"`) · React 19 · TypeScript · Tailwind CSS v4 · MDX
(`next-mdx-remote`, `rehype-pretty-code`) · React Hook Form + Zod · next-themes · Lucide Icons ·
Fontsource (selbst gehostete Schriften Manrope, Inter, JetBrains Mono)

## Features

- Statischer Export ohne Server: keine Cookies, kein Tracking, keine extern nachgeladenen Ressourcen
- Dark/Light/System-Theme ohne Flackern
- Zentrale Inhalte unter `content/` – Komponenten enthalten keine persönlichen Daten
- Projektübersicht mit Kategorie-Filter und Detailseiten inklusive Einordnung (beruflich, Portfolio,
  Abschlussprojekt) und Nachweisen
- Blog mit MDX: Tags, Suche, Pagination, Lesedauer, Inhaltsverzeichnis, Syntax-Highlighting
- Kontaktformular mit Validierung, das eine E-Mail im Mailprogramm vorbereitet (`mailto:`)
- GitHub-Sektion, zur Build-Zeit über die öffentliche API befüllt
- SEO: Canonical-URL pro Seite, Open Graph inklusive generiertem Vorschaubild, `sitemap.xml`,
  `robots.txt`, JSON-LD (Person, WebSite, BlogPosting, Breadcrumb)
- Barrierefreiheit: Skip-Link, sichtbare Fokuszustände, semantisches HTML, `prefers-reduced-motion`

## Entwicklung

Voraussetzung: Node.js 22 (wie im Deployment-Workflow) und npm.

```bash
npm install
```

```bash
npm run dev
```

| Script | Zweck |
|---|---|
| `npm run dev` | Entwicklungsserver unter `http://localhost:3000` |
| `npm run build` | Statischer Export nach `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript-Prüfung ohne Build |

Den fertigen Export lokal ansehen:

```bash
npx serve out
```

### Umgebungsvariablen

Alle optional; Vorlage in `.env.example` (nach `.env.local` kopieren).

| Variable | Beschreibung |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Basis-URL für Canonical-URLs, Sitemap und Open Graph. Im Workflow fest gesetzt. |
| `NEXT_PUBLIC_GITHUB_USERNAME` | Überschreibt `githubUsername` aus `content/site-config.ts`. |
| `GITHUB_TOKEN` | Hebt beim Build das Rate-Limit der GitHub-API an. Im Workflow automatisch vorhanden. |

## Inhalte bearbeiten

| Datei | Inhalt |
|---|---|
| `content/site-config.ts` | Name, Titel, Hero-Texte, Kontaktdaten, Impressums-Anschrift, Links |
| `content/navigation.ts` | Haupt- und Footer-Navigation |
| `content/projects.ts` | Projekte (Typ `Project`) |
| `content/skills.ts` | Kompetenzbereiche |
| `content/experience.ts` | Werdegang |
| `content/certifications.ts` | Abschlüsse und Zertifikate (nur tatsächlich erworbene) |
| `content/blog/*.mdx` | Blogartikel |
| `public/documents/marco-cv.pdf` | Lebenslauf (Pfad in `siteConfig.resumeUrl`) |

**Projekt hinzufügen:** Eintrag im `projects`-Array ergänzen. Detailseite, Filterkategorien und Sitemap
entstehen automatisch. Für das Cover eine `coverVariant` wählen (`pipeline`, `streaming`, `assistant`,
`quality`) oder in `components/projects/project-cover.tsx` eine neue ergänzen.

**Blogartikel hinzufügen:** `.mdx`-Datei unter `content/blog/` anlegen. `title`, `description` und `date`
sind Pflicht; fehlen sie, bricht der Build mit einer klaren Meldung ab.

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

**Impressum:** Die Anschrift steht in `siteConfig.address`. Solange sie leer ist, zeigt das Impressum
einen Hinweis statt der Anschrift.

## Projektstruktur

```text
app/                     Seiten, Layout, sitemap.ts, robots.ts, icon.svg
  og-image.png/route.tsx Open-Graph-Vorschaubild (wird beim Build als PNG erzeugt)
components/
  layout/                Header, Footer, Navigation, Theme, JSON-LD
  sections/              Sektionen der Startseite und der Über-mich-Seite
  projects/  blog/  contact/  ui/
content/                 Editierbare Inhalte (siehe oben)
lib/                     Blog-Loader, Metadata-Helper, Zod-Schema, Utilities
public/documents/        Lebenslauf-PDF
```

## Deployment

Der Workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) führt Lint und
Build aus und veröffentlicht `out/` über GitHub Pages:

- bei jedem Push auf `main`,
- wöchentlich per Zeitplan, damit die GitHub-Sektion aktuell bleibt,
- manuell über „Run workflow“.

Bei Pull Requests laufen nur Lint und Build, ohne Deployment.

Einmalige Einrichtung im Repository: `Settings → Pages → Build and deployment → Source: GitHub Actions`.

### Grenzen des statischen Exports

- Kein serverseitiger Formularversand; das Kontaktformular arbeitet mit `mailto:`.
- Keine eigenen HTTP-Header (CSP, `X-Frame-Options` usw.), da GitHub Pages das nicht unterstützt.
- Die GitHub-Sektion zeigt den Stand des letzten Builds. Schlägt der API-Abruf fehl, entfällt die Sektion.

## Rechtliches

Impressum und Datenschutzerklärung sind auf den tatsächlichen Betrieb (GitHub Pages, keine Cookies, kein
Tracking) zugeschnitten, ersetzen aber keine Rechtsberatung.

## Lizenz

Privates Projekt. Keine Lizenz zur freien Weiternutzung, sofern nicht separat vereinbart.

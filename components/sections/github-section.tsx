import Link from "next/link";
import { Star, GitFork } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/icons";

type GithubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

async function getRepos(): Promise<{ repos: GithubRepo[]; error?: string }> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || siteConfig.githubUsername;

  if (!username) {
    return { repos: [], error: "Kein GitHub-Benutzername konfiguriert." };
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { next: { revalidate: 3600 } },
    );

    if (res.status === 404) {
      return { repos: [], error: "GitHub-Profil wurde nicht gefunden." };
    }
    if (res.status === 403) {
      return { repos: [], error: "GitHub-API-Limit erreicht – bitte später erneut versuchen." };
    }
    if (!res.ok) {
      return { repos: [], error: "GitHub-Daten sind aktuell nicht abrufbar." };
    }

    const data: GithubRepo[] = await res.json();
    const filtered = data.filter((repo) => !repo.name.includes(".github.io")).slice(0, 3);

    if (filtered.length === 0) {
      return { repos: [], error: "Keine öffentlichen Repositories gefunden." };
    }

    return { repos: filtered };
  } catch {
    return { repos: [], error: "GitHub ist gerade nicht erreichbar." };
  }
}

export async function GithubSection() {
  const { repos, error } = await getRepos();

  return (
    <section className="border-b border-border py-20">
      <PageContainer>
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Open Source</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Zuletzt aktualisiert auf GitHub
            </h2>
          </div>
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <GithubIcon width={15} height={15} /> Profil ansehen
          </Link>
        </div>

        {error ? (
          <Card className="p-8 text-sm text-muted-foreground">
            {error} Das Portfolio funktioniert unabhängig davon vollständig. Alternativ direkt auf{" "}
            <Link href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent-blue underline">
              GitHub
            </Link>{" "}
            vorbeischauen.
          </Card>
        ) : (
          <div className="grid gap-5 sm:grid-cols-3">
            {repos.map((repo) => (
              <Card key={repo.name} className="flex flex-col p-6">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm font-semibold text-foreground hover:text-accent-blue"
                >
                  {repo.name}
                </Link>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {repo.description ?? "Keine Beschreibung hinterlegt."}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && <Badge variant="outline">{repo.language}</Badge>}
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </PageContainer>
    </section>
  );
}

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
  fork: boolean;
  archived: boolean;
};

const MAX_REPOS = 3;

/**
 * Lädt die zuletzt aktualisierten öffentlichen Repositories – einmalig zur Build-Zeit,
 * da die Seite statisch exportiert wird. Der Stand entspricht also dem letzten Deployment.
 *
 * Schlägt der Abruf fehl (Rate-Limit, Netzwerk), wird `null` geliefert und die Sektion
 * entfällt, statt eine Fehlermeldung dauerhaft in die veröffentlichte Seite zu schreiben.
 * Ein optionales `GITHUB_TOKEN` (im Deployment-Workflow gesetzt) hebt das Rate-Limit an.
 */
async function getRepos(): Promise<GithubRepo[] | null> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || siteConfig.githubUsername;
  if (!username) return null;

  const token = process.env.GITHUB_TOKEN;

  try {
    const url = `https://api.github.com/users/${username}/repos?sort=pushed&per_page=20`;
    const request = (authToken?: string) =>
      fetch(url, {
        headers: {
          Accept: "application/vnd.github+json",
          ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
      });

    let res = await request(token);
    // Ein ungültiges Token soll den öffentlichen, anonymen Abruf nicht verhindern.
    if (res.status === 401 && token) res = await request();

    if (!res.ok) {
      console.warn(`[github-section] GitHub-API antwortete mit ${res.status} – Sektion wird ausgelassen.`);
      return null;
    }

    const data: GithubRepo[] = await res.json();
    const repos = data
      .filter((repo) => !repo.fork && !repo.archived)
      .filter((repo) => !repo.name.toLowerCase().endsWith(".github.io") && repo.name.toLowerCase() !== username.toLowerCase())
      .slice(0, MAX_REPOS);

    return repos.length > 0 ? repos : null;
  } catch {
    console.warn("[github-section] GitHub nicht erreichbar – Sektion wird ausgelassen.");
    return null;
  }
}

export async function GithubSection() {
  const repos = await getRepos();
  if (!repos) return null;

  return (
    <section className="border-b border-border py-20">
      <PageContainer>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">GitHub</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Zuletzt aktualisierte Repositories
            </h2>
          </div>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <GithubIcon width={15} height={15} aria-hidden="true" /> Profil ansehen
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card key={repo.name} className="flex flex-col p-6">
              <h3 className="font-display text-sm font-semibold text-foreground">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="break-words hover:text-accent-blue">
                  {repo.name}
                </a>
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {repo.description ?? "Keine Beschreibung hinterlegt."}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                {repo.language && <Badge variant="outline">{repo.language}</Badge>}
                <span className="inline-flex items-center gap-1">
                  <Star size={12} aria-hidden="true" />
                  <span className="sr-only">Sterne:</span> {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork size={12} aria-hidden="true" />
                  <span className="sr-only">Forks:</span> {repo.forks_count}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

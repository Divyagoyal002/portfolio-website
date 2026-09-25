export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  url: string;
  pushedAt: string;
  stars: number;
};

const USER = "Divyagoyal002";
const SKIP = new Set(["test_folder", "Divyagoyal002", "portfolio-website", "Divyagoyal002.github.io"]);

// Latest public repos, fetched at build time and refreshed via ISR.
// Set GITHUB_TOKEN in Vercel to avoid the unauthenticated rate limit.
export async function getRecentRepos(limit = 6): Promise<Repo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=30`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
    });
    if (!res.ok) return [];
    const data: Array<Record<string, unknown>> = await res.json();
    return data
      .filter((r) => !r.fork && !r.private && !SKIP.has(r.name as string))
      .slice(0, limit)
      .map((r) => ({
        name: r.name as string,
        description: (r.description as string | null) ?? null,
        language: (r.language as string | null) ?? null,
        url: r.html_url as string,
        pushedAt: r.pushed_at as string,
        stars: r.stargazers_count as number,
      }));
  } catch {
    return [];
  }
}

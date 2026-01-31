import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
    contributions: Activity[];
};

export async function getGitHubContributions() {
    const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=2026`,
        {
            next: { revalidate: 3600 }, // Cache for 1 hour (3600 seconds)
        }
    );
    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions;
}

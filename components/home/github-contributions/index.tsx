"use client";

import { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";

import { GitHubContributionGraph } from "./graph";
import { Panel } from "@/components/panel";
import { GITHUB_USERNAME } from "@/config/site";
import type { Activity } from "@/components/kibo-ui/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export function GitHubContributions() {
  const [contributions, setContributions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=2026`
        );
        const data = (await res.json()) as GitHubContributionsResponse;
        setContributions(data.contributions);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <Panel>
        <h2 className="sr-only">GitHub Contributions</h2>
        <div className="flex justify-center items-center h-32">
          <Loader2 className="animate-spin" size={24} />
        </div>
      </Panel>
    );
  }

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>
      <GitHubContributionGraph contributions={contributions} />
    </Panel>
  );
}

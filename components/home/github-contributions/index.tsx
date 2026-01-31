"use client";

import { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";

import { GitHubContributionGraph } from "./graph";
import { Panel, PanelContent } from "@/components/panel";
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

  return (
    <Panel className="screen-line-before screen-line-after" id="github-contributions">
      <h2 className="sr-only">GitHub Contributions</h2>
      <div className="flex items-center justify-between flex-1 flex-col h-full overflow-hidden dark:bg-accent/50 shadow-[inset_0_3px_2px_rgba(255,255,255,0.021)] bg-accent">
        <div className="p-0.5 flex-1 h-full flex w-full py-[3px]">
          <div className="flex-1 max-sm:pb-3 flex flex-col bg-background outline rounded-sm outline-muted/50 relative overflow-hidden group w-full h-[170px]">
            {
              loading ? (
                <div className="flex justify-center items-center h-full">
                  <Loader2 className="animate-spin" size={24} />
                </div>
              ) : (
                <PanelContent className="space-y-2.5 bg-background w-full p-1">
                  <GitHubContributionGraph contributions={contributions} />
                </PanelContent>
              )
            }
          </div>
        </div>
      </div>
    </Panel>
  );
}

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
    <Panel id="github-contributions">
      <h2 className="sr-only">GitHub Contributions</h2>
      <div className="flex items-center justify-between flex-1 flex-col h-full overflow-hidden dark:bg-accent/50 shadow-[inset_0_3px_2px_rgba(255,255,255,0.021)] bg-accent rounded-xl">
        <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left text-sm sm:text-base">
          <a href="#github-contributions">GitHub Contributions</a>
        </h3>
        <div className="pt-0 flex-1 h-full flex w-full p-[3px]">
          <div className="flex-1 px-3 py-2 max-sm:pb-2 flex flex-col bg-background outline rounded-[10px] outline-muted/50 relative overflow-hidden group w-full">
            {
              loading ? (
                <div className="flex justify-center items-center h-full min-h-46">
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

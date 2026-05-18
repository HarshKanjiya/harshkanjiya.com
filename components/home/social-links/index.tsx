
import { Panel, PanelContent } from "@/components/panel";
import { SocialLinkItem } from "./social-link-item";
import { SOCIAL_LINKS } from "@/data/social-links";

export function SocialLinks() {
  return (
    <Panel id="social-links">
      <h2 className="sr-only">Social Links</h2>
      <div className="flex items-center justify-between flex-1 flex-col h-full overflow-hidden dark:bg-accent/50 shadow-[inset_0_3px_2px_rgba(255,255,255,0.021)] bg-accent rounded-xl">
        <h3 className="w-full py-0 h-1 px-4 text-muted-foreground text-left">
          {/* <a href="#social-links">Social Links</a> */}
        </h3>
        <div className="pt-0 flex-1 h-full flex w-full p-[3px]">
          <div className="flex-1 p-0 flex flex-col bg-background outline rounded-[10px] outline-muted/50 relative overflow-hidden group w-full">
            <PanelContent className="space-y-2.5 bg-background w-full p-0">
              <div className="grid grid-cols-1 gap-0 sm:gap-4 sm:grid-cols-3 px-0 sm:p-2">
                {SOCIAL_LINKS.map((link, index) => {
                  return <SocialLinkItem key={index} {...link} />;
                })}
              </div>
            </PanelContent>
          </div>
        </div>
      </div>
    </Panel>
  );
}

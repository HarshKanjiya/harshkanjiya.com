
import { Panel, PanelContent } from "@/components/panel";
import { SocialLinkItem } from "./social-link-item";
import { SOCIAL_LINKS } from "@/data/social-links";

export function SocialLinks() {
  return (
    // <Panel>
    //   <h2 className="sr-only">Social Links</h2>
    //   <div className="relative py-4 px-0">
    //     <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 sm:grid-cols-3 px-4">
    //       <div className="border-x border-edge"></div>
    //       <div className="border-x border-edge"></div>
    //       <div className="border-x border-edge"></div>
    //     </div>
    //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 px-4">
    //       {SOCIAL_LINKS.map((link, index) => {
    //         return <SocialLinkItem key={index} {...link} />;
    //       })}
    //     </div>
    //   </div>
    // </Panel>
    <Panel className="screen-line-before screen-line-after" id="social-links">
      <h2 className="sr-only">Social Links</h2>
      <div className="flex items-center justify-between flex-1 flex-col h-full overflow-hidden dark:bg-accent/50 shadow-[inset_0_3px_2px_rgba(255,255,255,0.021)] bg-accent">
        <div className="p-0.5 flex-1 h-full flex w-full py-[3px]">
          <div className="flex-1 max-sm:pb-3 flex flex-col bg-background outline rounded-sm outline-muted/50 relative overflow-hidden group w-full">
            <PanelContent className="space-y-2.5 bg-background w-full p-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 p-2">
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


import { Panel } from "@/components/panel";
import { SocialLinkItem } from "./social-link-item";
import { SOCIAL_LINKS } from "@/data/social-links";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>
      <div className="relative py-4 px-0">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 sm:grid-cols-3 px-4">
          <div className="border-x border-edge"></div>
          <div className="border-x border-edge"></div>
          <div className="border-x border-edge"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 px-4">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </div>
    </Panel>
  );
}

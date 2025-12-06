import ThemeToggle from "@/components/theme-toggle";
import { MAIN_NAV } from "@/config/site";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Link from "next/link";
import { DesktopNav } from "./desktop-nav";
import { NavItemGitHub } from "./nav-item-github";
import { SiteHeaderMark } from "./site-header-mark";
import SiteHeaderWrapper from "./site-header-wrapper";

// const BrandContextMenu = dynamic(() =>
//   import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
// );

// const CommandMenu = dynamic(() =>
//   import("@/components/command-menu").then((mod) => mod.CommandMenu)
// );

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => mod.MobileNav)
);

export function SiteHeader() {

  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-4 sm:px-2 pt-2",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]",
        "not-dark:data-[affix=true]:**:data-header-container:after:bg-border",
        "transition-shadow duration-300"
      )}
    >
      <div
        className="screen-line-before md:max-w-216 screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge pl-2 pr-1.5 after:z-1 after:transition-[background-color] sm:gap-4"
        data-header-container
      >
        {/* <BrandContextMenu> */}
        <Link
          className="has-data-[visible=false]:pointer-events-none [&_svg]:h-8"
          href="/"
          aria-label="Home"
        >
          <SiteHeaderMark />
        </Link>
        {/* </BrandContextMenu> */}

        <div className="flex-1" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center *:first:mr-2">
          {/* <CommandMenu posts={posts} /> */}
          <NavItemGitHub />
          <span className="mx-1.5 flex h-6 w-px bg-border" />
          <ThemeToggle />
          <MobileNav className="md:hidden" items={MAIN_NAV} />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}

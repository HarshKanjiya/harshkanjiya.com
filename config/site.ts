import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chanhdai.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "My Library",
    href: "/my-library",
  },
];

export const GITHUB_USERNAME = "harshkanjiya";
export const SOURCE_CODE_GITHUB_REPO = "HarshKanjiya/harshkanjiya.com";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/HarshKanjiya/harshkanjiya.com";

// export const SPONSORSHIP_URL = "https://github.com/sponsors/harshkanjiya";

export const UTM_PARAMS = {
  utm_source: "harshkanjiya.com",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};

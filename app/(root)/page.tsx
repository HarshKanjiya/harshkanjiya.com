import CustomSeparator from "@/components/custom-separator";
import { About } from "@/components/home/about";
import { Blog } from "@/components/home/blogs";
import { Bookmarks } from "@/components/home/bookmarks";
import { Experiences } from "@/components/home/experiences";
import { GitHubContributions } from "@/components/home/github-contributions";
import { HeroSection } from "@/components/home/hero-section";
import Overview from "@/components/home/overview";
import { ProfileHeader } from "@/components/home/profile-header";
import { Projects } from "@/components/home/Projects";
import { SocialLinks } from "@/components/home/social-links";
import { TeckStack } from "@/components/home/teck-stack";
import { SITE_INFO } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    description: SITE_INFO.description,
    applicationName: SITE_INFO.name,
    keywords: SITE_INFO.keywords,
    creator: SITE_INFO.name,
    authors: [{ name: SITE_INFO.name, url: SITE_INFO.url }],
    publisher: SITE_INFO.name,
    metadataBase: new URL(SITE_INFO.url),
    alternates: {
        canonical: SITE_INFO.url,
    },
}

export default async function Page() {
    return (
        <main
            className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
            {/* <Script src="/js/meshCanvas.js" strategy="beforeInteractive" /> */}

            <HeroSection />
            <ProfileHeader />
            <CustomSeparator />

            <Overview />
            <CustomSeparator />

            {/* <TestimonialsMarquee /> */}
            {/* <CustomSeparator /> */}

            <TeckStack />
            <CustomSeparator />

            <Projects />
            <CustomSeparator />

            <Blog />
            <CustomSeparator />


            {/* <Awards /> */}
            {/* <CustomSeparator /> */}

            {/* <Certifications /> */}
            {/* <CustomSeparator /> */}

            <Bookmarks />
            <CustomSeparator />

            <Experiences />
            <CustomSeparator />

            <About />
            <CustomSeparator />

            <GitHubContributions />
            <CustomSeparator />

            <SocialLinks />
            <CustomSeparator />

            {/* <Brand /> */}
            {/* <CustomSeparator /> */}
        </main>
    );
}
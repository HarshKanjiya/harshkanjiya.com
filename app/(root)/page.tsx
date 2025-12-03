import CustomSeparator from "@/components/custom-separator";
import { About } from "@/components/home/about";
import { Blog } from "@/components/home/blogs";
import { Bookmarks } from "@/components/home/bookmarks";
import { Brand } from "@/components/home/brand";
import { Experiences } from "@/components/home/experiences";
import { GitHubContributions } from "@/components/home/github-contributions";
import { HeroSection } from "@/components/home/hero-section";
// import { MeshCanvasLoader } from "@/components/mesh-canvas-loader";
import Overview from "@/components/home/overview";
import { ProfileHeader } from "@/components/home/profile-header";
import { SocialLinks } from "@/components/home/social-links";
import { TeckStack } from "@/components/home/teck-stack";
import Script from "next/script";


export default async function Page() {
    return (
        <main
            className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
            <Script src="/js/meshCanvas.js" strategy="beforeInteractive" />

            <HeroSection />
            <ProfileHeader />
            <CustomSeparator />

            <Overview />
            <CustomSeparator />

            {/* <TestimonialsMarquee /> */}
            {/* <CustomSeparator /> */}

            <TeckStack />
            <CustomSeparator />

            <Blog />
            <CustomSeparator />

            {/* <Projects /> */}
            {/* <CustomSeparator /> */}

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

            <Brand />
            <CustomSeparator />
        </main>
    );
}
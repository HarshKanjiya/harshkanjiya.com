import CustomSeparator from "@/components/custom-separator";
import { About } from "@/components/home/about";
import { Brand } from "@/components/home/brand";
import { Experiences } from "@/components/home/experiences";
import { GitHubContributions } from "@/components/home/github-contributions";
import { HeroSection } from "@/components/home/hero-section";
import Overview from "@/components/home/overview";
import { ProfileHeader } from "@/components/home/profile-header";
import { SocialLinks } from "@/components/home/social-links";
import { TeckStack } from "@/components/home/teck-stack";

export default async function Page() {
    return (
        <main className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
            <HeroSection />
            <ProfileHeader />
            <CustomSeparator />

            <Overview />
            <CustomSeparator />

            <SocialLinks />
            <CustomSeparator />

            <About />
            <CustomSeparator />

            {/* <TestimonialsMarquee /> */}
            <CustomSeparator />

            <GitHubContributions />
            <CustomSeparator />

            <TeckStack />
            <CustomSeparator />

            {/* <Blog /> */}
            <CustomSeparator />

            <Experiences />
            <CustomSeparator />

            {/* <Projects /> */}
            <CustomSeparator />

            {/* <Awards /> */}
            <CustomSeparator />

            {/* <Certifications /> */}
            <CustomSeparator />

            {/* <Bookmarks /> */}
            {/* <CustomSeparator /> */}

            <Brand />
            <CustomSeparator />
        </main>
    );
}
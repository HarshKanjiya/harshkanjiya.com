import { getAllProjects } from "@/actions/project";
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { PostItem } from "../blog/post-item";
import { ProjectItem } from "../project/project-item";

export function Projects() {
    const allPosts = getAllProjects();

    return (
        <Panel id="projects">
            <PanelHeader>
                <PanelTitle className="flex gap-2 items-center group">
                    Projects
                    <Link
                        href="#projects"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                        #
                    </Link>
                </PanelTitle>
            </PanelHeader>

            <div className="relative py-4">
                <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                    <div className="border-r border-edge"></div>
                    <div className="border-l border-edge"></div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {allPosts.slice(0, 4).map((post) => (
                        <ProjectItem key={post.slug} project={post} />
                    ))}
                </div>
            </div>

            {
                allPosts.length > 4 && (
                    <div className="screen-line-before flex justify-center py-2">
                        <Button variant="default" asChild>
                            <Link href="/projects">
                                All Projects
                                <ArrowRightIcon />
                            </Link>
                        </Button>
                    </div>
                )
            }
        </Panel>
    );
}

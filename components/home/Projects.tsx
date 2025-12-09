import { getAllProjects } from "@/actions/project";
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { ProjectItem } from "../project/project-item";

export function Projects() {
    const allPosts = getAllProjects();

    return (
        <Panel id="projects">
            <PanelHeader>
                <PanelTitle className="flex gap-2 items-center justify-between">
                    <a href="#projects" className="flex gap-2 group">
                        Projects
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            #
                        </span>
                    </a>
                    {
                        allPosts.length > 0 && (
                            <Button variant="link" asChild size="sm" className="pr-0!">
                                <Link href="/projects">
                                    View All
                                    <ChevronRightIcon />
                                </Link>
                            </Button>
                        )
                    }
                </PanelTitle>
            </PanelHeader>


            <div className="relative py-4 px-2 sm:px-0">
                <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2 px-4">
                    <div className="border-x border-edge"></div>
                    <div className="border-x border-edge"></div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 px-4">
                    {allPosts.slice(0, 4).map((post, id) => (
                        <div className="screen-line-after screen-line-before" key={id}>
                            <ProjectItem key={post.slug} project={post} />
                        </div>
                    ))}
                </div>
            </div>
        </Panel>
    );
}

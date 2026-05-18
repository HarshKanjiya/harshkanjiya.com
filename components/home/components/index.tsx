import { componentGridConfig } from "@/app/components/page";
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { REGISTRY_COMPONENTS } from "@/lib/registry/components";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function Components() {
    // const allPosts = getAllProjects();

    return (
        <Panel id="components" className="px-0 space-y-4">
            <PanelHeader className="px-0">
                <PanelTitle className="flex gap-2 items-center justify-between w-full screen-line-after screen-line-before">
                    <a href="#components" className="flex gap-2 group max-sm:text-xl">
                        Components
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</span>
                    </a>
                    <Button variant="link" asChild size="sm" className="pr-0!">
                        <Link href="/components">
                            View All
                            <ChevronRightIcon />
                        </Link>
                    </Button>
                </PanelTitle>
            </PanelHeader>


            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 auto-rows-[160px]">
                {REGISTRY_COMPONENTS.map((comp) => {
                    const config = componentGridConfig[comp.slug] || {
                        className: "md:col-span-4 md:row-span-1",
                        visual: (
                            <div className="flex h-full w-full items-center justify-center">
                                <span className="font-mono text-sm text-muted-foreground opacity-50">
                                    UI pending...
                                </span>
                            </div>
                        ),
                    }

                    return (
                        <div key={comp.slug} className={cn("p-1 border border-edge rounded-xl corner-squircle", config.className)}>
                            <Link
                                href={`/components/${comp.slug}`}
                                className={cn(
                                    "group relative flex flex-col h-full w-full bg-background transition-colors hover:bg-muted/10",
                                )}
                            >
                                {/* Visual UI Container */}
                                <div className="relative z-10 flex h-full w-full flex-1 items-center justify-center p-6">
                                    {config.visual}
                                </div>

                                {/* Title & Info Overlay (Shows on hover or subtle default) */}
                                <div className="absolute left-4 top-4 z-20 transition-opacity">
                                    <p className="font-mono text-xs font-medium text-foreground opacity-0 group-hover:opacity-100">
                                        {comp.title}
                                    </p>
                                </div>
                                <div className="absolute bottom-4 right-4 z-20 transition-opacity">
                                    <p className="font-mono text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100">
                                        @harshexists/{comp.slug}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>

        </Panel>
    );
}

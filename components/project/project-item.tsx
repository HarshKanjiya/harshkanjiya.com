import { cn } from "@/lib/utils";
import { Project } from "@/types/projects";
import { format } from "date-fns";
import { PinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../ui/tag";

export function ProjectItem({ project, shouldPreloadImage }: { project: Project; shouldPreloadImage?: boolean }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className={cn(
                "group/post flex flex-col gap-2 p-2",
                "max-sm:screen-line-before max-sm:screen-line-after",
                "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
            )}
        >
            {project.metadata.image && (
                <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
                    <Image
                        src={project.metadata.image}
                        alt={project.metadata.title}
                        width={1200}
                        height={630}
                        quality={100}
                        priority={shouldPreloadImage}
                        unoptimized
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />

                    <div className="absolute top-1.5 right-1.5 flex gap-2">
                        {project.metadata.pinned && (
                            <span className="size-6 rounded-md bg-secondary flex items-center justify-center">
                                <PinIcon className="size-4 rotate-45 text-secondary-foreground" />
                                <span className="sr-only">Pinned</span>
                            </span>
                        )}
                    </div>
                </div>
            )}

            <div className="flex flex-col p-2 gap-2">
                <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
                    {project.metadata.title}
                    {project.metadata.new && (
                        <span className="ml-2 inline-block size-2 -translate-y-px rounded-full bg-info">
                            <span className="sr-only">New</span>
                        </span>
                    )}
                </h3>
                <div className="flex gap-2 flex-wrap">
                    {project.metadata.workingOn &&
                        <Tag className="rounded-md w-fit">Working on</Tag>
                    }
                    {
                        project.metadata?.tech?.split(',')?.slice(0, 3).map((tech) => (
                            <Tag key={tech} className="rounded-md w-fit h-6">{tech}</Tag>
                        ))
                    }
                </div>
            </div>
        </Link>
    );
}

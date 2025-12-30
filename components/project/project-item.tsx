"use client";

import { Project } from "@/types/projects";
import { PinIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../ui/tag";

export function ProjectItem({ project, shouldPreloadImage }: { project: Project; shouldPreloadImage?: boolean }) {
    return (
        // <div className="group">
        <Link
            href={`/projects/${project.slug}`} className="flex items-center justify-between flex-1 flex-col border-edge border h-full overflow-hidden bg-accent dark:bg-accent/50 relative group">
            <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left group-hover:underline">
                {project.metadata.title}
                {project.metadata.new && (
                    <span className="ml-2 inline-block size-2 -translate-y-px rounded-full bg-info">
                        <span className="sr-only">New</span>
                    </span>
                )}
            </h3>
            <div className="absolute top-1.5 right-1.5 flex items-center justify-center gap-2">
                {project.metadata.link && (
                    <a onClick={(e) => { e.stopPropagation(); }} href={project.metadata.link} target="_blank" rel="noopener noreferrer" className="flex size-6 items-center justify-center rounded-md bg-secondary">
                        <SquareArrowOutUpRightIcon className="size-4 text-secondary-foreground" />
                        <span className="sr-only">External link</span>
                    </a>
                )}
                {project.metadata.pinned && (
                    <span className="flex size-6 items-center justify-center rounded-md bg-secondary">
                        <PinIcon className="size-4 rotate-45 text-secondary-foreground" />
                        <span className="sr-only">Pinned</span>
                    </span>
                )}
            </div>
            <div className="p-0.5 pt-0 flex-1 h-full flex w-full">
                <div className="flex-1 rounded-sm p-1.5 flex flex-col bg-background outline outline-muted/50  relative overflow-hidden group w-full">
                    {project.metadata.image && (
                        <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-sm">
                            <Image
                                src={project.metadata.image}
                                alt={project.metadata.title}
                                width={1200}
                                height={630}
                                quality={100}
                                priority={shouldPreloadImage}
                                unoptimized
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-sm outline outline-muted/50 ring-inset dark:ring-white/10" />
                        </div>
                    )}
                    <div className="flex flex-col gap-2 pt-2.5 px-1 pb-1">
                        <p className="text-sm text-muted-foreground leading-snug text-ellipsis line-clamp-2  underline-offset-4 group-hover/post:underline">
                            {project.metadata.description}
                        </p>
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
                </div>
            </div>
        </Link >
        // </div>
    );
}

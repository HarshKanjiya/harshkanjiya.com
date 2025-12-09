"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Tag } from "@/components/ui/tag"
import { useState } from "react"
import PreviewLayout from "../common/previewLayout"

export default function NoDeadZoneDemo() {
    const [isOnA, setIsOnA] = useState(false)
    const [isOnB, setIsOnB] = useState(false)

    return (
        <PreviewLayout>
            <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 sm:grid-cols-2 px-4">
                <div className="border-x"></div>
                <div className="border-x max-sm:hidden"></div>
            </div>
            <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 sm:hidden ">
                <div className="border-b"></div>
                <div className="border-t"></div>
            </div>
            <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 py-4">
                <div className="border-y"></div>
            </div>


            <div className="grid gap-4 sm:grid-cols-2">
                {/* A: Dead zones (only tiny checkbox is clickable) */}
                <div className="h-[170px] border border-edge bg-background p-4 max-sm:p-3 flex flex-col justify-evenly">
                    <div className="mb-4 flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start gap-3">
                        <p className="text-sm font-medium m-0! flex items-center gap-2">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">A</span>
                            <span>Has dead zones</span>
                        </p>
                        <Tag>Not recommended</Tag>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <div className="flex min-h-12 flex-1 items-center gap-3 rounded-md border border-transparent sm:px-3">
                            <Checkbox
                                checked={isOnA}
                                onCheckedChange={(v) => setIsOnA(Boolean(v))}
                                aria-label={isOnA ? "Unselect" : "Select"}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            />
                            <div className="max-sm:hidden">
                                <AvatarCircle label="AB" />
                            </div>
                            <div className="leading-tight flex flex-col gap-2">
                                <p className="text-sm font-medium m-0!">Project notifications</p>
                                <p className="text-xs text-muted-foreground m-0!">Only checkbox is clickable</p>
                            </div>
                        </div>
                        {/* Right-side spacer to mirror layout */}
                        <div className="h-8 w-8" aria-hidden />
                    </div>
                </div>

                {/* B: No dead zones (entire visible row is interactive) */}
                <div className="h-[170px] border border-edge bg-background p-4 flex flex-col justify-evenly">
                    <div className="mb-4 flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start gap-3">
                        <p className="text-sm font-medium m-0! flex items-center gap-2">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">B</span>
                            <span>Entire row is clickable</span>
                        </p>
                        <Tag>Recommended</Tag>
                    </div>

                    {/* Whole control is interactive without using <button> */}
                    <div
                        role="checkbox"
                        aria-checked={isOnB}
                        tabIndex={0}
                        className="group flex w-full items-center justify-between gap-3 rounded-md border border-transparent sm:px-3 py-2 text-left transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:focus-visible:outline-zinc-400"
                        onClick={() => setIsOnB((v) => !v)}
                        onKeyDown={(e) => {
                            if (e.key === " " || e.key === "Enter") {
                                e.preventDefault();
                                setIsOnB((v) => !v);
                            }
                        }}
                        aria-label={isOnB ? "Unselect item" : "Select item"}
                        style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" as any }}
                    >
                        <div className="flex min-h-12 flex-1 items-center gap-3">
                            {/* Display checkbox state; disable pointer events so row handles clicks */}
                            <Checkbox
                                checked={isOnB}
                                onCheckedChange={(v) => setIsOnB(Boolean(v))}
                                className="pointer-events-none"
                            />
                            <div className="max-sm:hidden">
                                <AvatarCircle label="AB" />
                            </div>
                            <div className="leading-tight flex flex-col gap-2">
                                <p className="text-sm font-medium m-0!">Project notifications</p>
                                <p className="text-xs text-muted-foreground m-0!">Bigger target · no dead zones</p>
                            </div>
                        </div>

                        {/* Visual affordance placeholder to balance layout */}
                        <div className="h-8 w-8" aria-hidden />
                    </div>
                </div>
            </div>
        </PreviewLayout>
    )
}

function AvatarCircle({ label }: { label: string }) {
    return (
        <div className="grid size-8 place-items-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100">
            {label}
        </div>
    )
}

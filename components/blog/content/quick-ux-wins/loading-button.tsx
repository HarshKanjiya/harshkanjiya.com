"use client"

import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"
import { useState } from "react"
import PreviewLayout from "../common/previewLayout"
import { Tag } from "@/components/ui/tag"

type AsyncAction = () => Promise<void>

function sleep(ms: number) {
    return new Promise((res) => setTimeout(res, ms))
}

export default function LoadingButtonDemo() {
    const [isSavingA, setIsSavingA] = useState(false)
    const [isSavingB, setIsSavingB] = useState(false)

    const save: AsyncAction = async () => {
        // Simulate an async save
        await sleep(1200)
    }

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
                <div className="border border-edge bg-background p-4 flex flex-col justify-between">
                    <div className="mb-4 flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start gap-3">
                        <p className="text-sm font-medium m-0! flex items-center gap-2">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">A</span>
                            <span>Clears label</span>
                        </p>
                        <Tag>Not recommended</Tag>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <Button
                            className="px-9"
                            type="button"
                            disabled={isSavingA}
                            onClick={async () => {
                                setIsSavingA(true)
                                await save()
                                setIsSavingA(false)
                            }}
                            aria-busy={isSavingA}
                            aria-live="polite"
                            aria-label={isSavingA ? "Saving" : "Save"}
                        >
                            {isSavingA ? (
                                <Loader className="size-4 animate-spin" />
                            ) : (
                                "Save"
                            )}
                        </Button>

                        <p className="text-xs text-muted-foreground">
                            Label vanishes → context lost
                        </p>
                    </div>
                </div>

                <div className="border border-edge bg-background p-4 flex flex-col justify-between">
                    <div className="mb-4 flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start gap-3">
                        <p className="text-sm font-medium m-0! flex items-center gap-2">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">B</span>
                            <span>Keeps label + spinner</span>
                        </p>
                        <Tag>Recommended</Tag>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <Button
                            className="px-9 transition-none"
                            type="button"
                            disabled={isSavingB}
                            onClick={async () => {
                                setIsSavingB(true)
                                await save()
                                setIsSavingB(false)
                            }}
                            aria-busy={isSavingB}
                            aria-live="polite"
                            aria-label={isSavingB ? "Saving" : "Save"}
                        >
                            {isSavingB && <Loader className="size-4 animate-spin" />}
                            <span>
                                {isSavingB ? "Saving..." : "Save"}
                            </span>
                        </Button>

                        <p className="text-xs text-muted-foreground">
                            Label persists → no layout shift
                        </p>
                    </div>
                </div>
            </div>
        </PreviewLayout>
    )
}
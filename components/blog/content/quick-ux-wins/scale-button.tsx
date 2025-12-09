"use client"

import { Button } from "@/components/ui/button"
import PreviewLayout from "../common/previewLayout"

export default function ScaleButtonDemo() {

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
                <div className="border border-edge bg-background p-4 flex items-center justify-center">
                    <Button
                        type="button"
                        aria-live="polite"
                        aria-label="Save"
                    >
                        Without scale down
                    </Button>
                </div>

                <div className="border border-edge bg-background p-4 flex items-center justify-center">
                    <Button
                        className="active:scale-[0.97] transition-transform"
                        type="button"
                        aria-live="polite"
                        aria-label="Save"
                    >
                        With scale down
                    </Button>
                </div>
            </div>
        </PreviewLayout>
    )
}
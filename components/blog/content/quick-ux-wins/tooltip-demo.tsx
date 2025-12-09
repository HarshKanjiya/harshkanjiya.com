"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import PreviewLayout from "../common/previewLayout"
import { Button } from "@/components/ui/button"
import { ChangeEvent, useState } from "react";


export default function ToolTipDemo() {

    const [skipDelayDuration, setSkipDelayDuration] = useState<
        number | undefined
    >(1000);

    return (
        <PreviewLayout>

            <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 px-4">
                <div className="border-x"></div>
            </div>
            <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 py-4">
                <div className="border-y"></div>
            </div>


            <div className="grid gap-4 grid-cols-1">
                <div className="border border-edge bg-background p-4">

                    <div className="flex gap-3">
                        <TooltipProvider skipDelayDuration={100}>
                            <div className="flex gap-2">
                                <Tooltip delayDuration={1000}>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline">Hover Here First</Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Hello there!</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip delayDuration={1000}>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline">Then Hover Here</Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Hello there!</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    </div>

                </div>
            </div>
        </PreviewLayout>
    )
}

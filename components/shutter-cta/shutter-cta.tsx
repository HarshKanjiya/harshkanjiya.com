"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

type Props = {
    baseDelay?: number; // starting time offset
};

export function ArrowBlock({ baseDelay = 0 }: Props) {
    const pattern = [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
    ];

    return (
        <div className="grid gap-px grid-cols-4">
            {pattern.flatMap((row, r) =>
                row.map((cell, c) => {
                    if (!cell) {
                        return (
                            <div
                                key={`${r}-${c}`}
                                className="h-[4px] w-[4px]"
                            />
                        );
                    }
                    const delay = baseDelay + (c * 120 + r * 60);
                    return (
                        <div
                            key={`${r}-${c}`}
                            className="h-[4px] w-[4px] bg-white rounded-full"
                            style={{
                                animation: `dotPulse 1.5s ease-in-out infinite`,
                                animationDelay: `${delay}ms`,
                            }}
                        />
                    );
                })
            )}
            <style jsx>{`
                @keyframes dotPulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 1; }
                }
            `}</style>
        </div>
    );
}

const arrows = [
    { delay: 0 },
    { delay: 200 },
    { delay: 400 },
    { delay: 600 },
    { delay: 800 },
];

const INITIAL_W = 42
const SLIDE_THRESHOLD = 0.6 // 60% of max drag triggers navigation

export function ShutterCta() {
    const router = useRouter()
    const buttonRef = useRef<HTMLButtonElement>(null)
    const touchStartX = useRef(0)
    const [dragWidth, setDragWidth] = useState<number | null>(null)
    const isDragging = useRef(false)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
        isDragging.current = true
        setDragWidth(INITIAL_W)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current || !buttonRef.current) return
        const btnW = buttonRef.current.offsetWidth
        const maxW = btnW - 8
        const dragX = e.touches[0].clientX - touchStartX.current
        setDragWidth(Math.max(INITIAL_W, Math.min(maxW, INITIAL_W + dragX)))
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        isDragging.current = false
        if (!buttonRef.current) return
        const btnW = buttonRef.current.offsetWidth
        const maxW = btnW - 8
        const dragged = (dragWidth ?? INITIAL_W) - INITIAL_W
        const maxDrag = maxW - INITIAL_W

        if (dragged > 10 && dragged / maxDrag >= SLIDE_THRESHOLD) {
            // Slid far enough — fill to full width then navigate
            e.preventDefault()
            setDragWidth(maxW)
            setTimeout(() => router.push("#"), 250)
        } else if (dragged > 10) {
            // Partial drag — snap back, don't navigate
            e.preventDefault()
            setDragWidth(null)
        } else {
            // Minimal movement — treat as tap, let Link navigate
            setDragWidth(null)
        }
    }

    return (
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row md:justify-start md:gap-8 gap-6">
            <Link
                prefetch
                href="#" className="relative">
                <button
                    ref={buttonRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="
                    group relative font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[48px] rounded-[10px]
                    bg-[#222] dark:bg-[#0A6256] text-white flex items-center overflow-hidden cursor-pointer
                    dark:shadow-[inset_0px_0px_6px_6px_rgba(4,47,41,0.61),inset_0px_0px_2px_1px_rgba(2,24,21,0.5)]
                    "
                >
                    <div
                        className="
                        lg:group-hover:w-[calc(100%-8px)] top-[4px] left-[4px] h-[40px] w-[42px] bg-[#0A6256] dark:bg-[#111]
                        flex items-center gap-2 absolute rounded-[7px] overflow-hidden ease-in-out
                        shadow-[0px_0px_17px_4px_#000000,inset_0px_0px_6px_6px_rgba(4,47,41,0.31),inset_0px_0px_2px_1px_rgba(2,24,21,0.35)]
                        dark:shadow-[0px_0px_4px_2px_#333]
                        "
                        style={{
                            width: dragWidth !== null ? `${dragWidth}px` : undefined,
                            transition: dragWidth !== null
                                ? isDragging.current ? "none" : "width 250ms ease-in-out"
                                : "width 300ms ease-in-out",
                        }}
                    >
                        <div className="absolute w-[235px] h-full flex gap-6 items-center justify-between pl-4! pr-5!">
                            {arrows.map((a, i) => (
                                <ArrowBlock key={i} baseDelay={a.delay} />
                            ))}
                        </div>
                    </div>
                    <span className="ml-10">Slide to Action</span>
                </button>
            </Link>
        </div>
    )
}

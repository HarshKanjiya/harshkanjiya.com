"use client";

import { motion } from "motion/react";
export function CirclePattern({ isHovered }: { isHovered?: boolean }) {
    const rings = [
        { width: 195, height: 195, x: 86.5, y: 108.5, delay: 0 }, // innermost
        { width: 267, height: 267, x: 50.5, y: 72.5, delay: 0.1 }, // inner middle
        { width: 339, height: 339, x: 14.5, y: 36.5, delay: 0.3 }, // outer middle
        { width: 411, height: 411, x: -21.5, y: 0.5, delay: 0.6 }, // outermost
    ];

    return (
        <div className="py-4">
            <svg
                className="h-full w-[400px] overflow-visible"
                viewBox="0 0 368 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {rings.map((ring, index) => (
                    <motion.rect
                        key={index}
                        x={ring.x}
                        y={ring.y}
                        width={ring.width}
                        height={ring.height}
                        rx={ring.width / 2}
                        fill="none"
                        initial={{ stroke: "#D6DADE", strokeOpacity: 0.5 }}
                        animate={{
                            stroke: isHovered ? "#818cf8" : "#D6DADE",
                            strokeOpacity: isHovered ? 1 : 0.5,
                            transform: isHovered ? "translateY(-2%)" : "translateY(0%)",
                        }}
                        transition={{
                            duration: 0.3,
                            delay: isHovered ? ring.delay : 0.45 - ring.delay, // Reverse delay when unhovered
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
"use client";

import { useEffect } from "react";

interface MeshCanvasWindow extends Window {
    __meshCanvasLoaded?: boolean;
}

export function MeshCanvasLoader() {
    useEffect(() => {
        const loadMeshCanvas = async () => {
            if (typeof window === "undefined") {
                return;
            }

            const globalWindow = window as MeshCanvasWindow;

            if (globalWindow.__meshCanvasLoaded) {
                return;
            }

            try {
                await import("@/assets/js/meshCanvas");
                globalWindow.__meshCanvasLoaded = true;
            } catch (error) {
                console.error("Failed to load meshCanvas.js", error);
            }
        };

        loadMeshCanvas();
    }, []);

    return null;
}

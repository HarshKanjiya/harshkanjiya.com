
export function HeroSection() {
    return (
        <>
            <div className="aspect-2/1 border-x border-edge relative select-none sm:aspect-5/2 overflow-hidden flex items-center justify-center -mb-20 text-white">
                <figure className="relative mx-auto">
                    <blockquote className="text-center">
                        <p className="font-serif italic tracking-tight text-xl sm:text-2xl md:text-3xl">
                            “Simplicity is the ultimate sophistication.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-2 text-right text-sm opacity-85 flex flex-col">
                        — Leonardo da Vinci <span className="opacity-80">(15th century)</span>
                    </figcaption>
                </figure>
                {/* @ts-ignore */}
                <canvas id="gradient-canvas" data-transition-in></canvas>
            </div>
        </>
    );
}

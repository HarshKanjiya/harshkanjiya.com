export function HeroSection() {

    return (
        <>
            <div className="aspect-2/1 border-x border-edge relative select-none sm:aspect-3/1 overflow-hidden flex items-center justify-center text-black dark:text-white">
                HK
                {/* @ts-ignore */}
                <canvas id="gradient-canvas" data-transition-in></canvas>
            </div>
        </>
    );
}

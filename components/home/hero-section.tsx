import Image from "next/image";

export function HeroSection() {
    return (
        <div className="aspect-2/1 border-x border-edge relative z-0 select-none sm:aspect-5/2 overflow-hidden flex items-center justify-center -mb-20 text-white">
            {/* Noise Background */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] dark:opacity-[0.03] bg-[url('https://www.ui-layouts.com/noise.gif')]" />

            {/* Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-full pointer-events-none bg-gradient-to-b from-transparent to-background" />

            <Image src={'https://assets.harshkanjiya.com/general/brand-logo-transparent.svg'} alt="Hero Image" width={80} height={80} className="relative z-30" />
            {/* @ts-ignore */}
            <canvas id="gradient-canvas" data-transition-in></canvas>
        </div>
    );
}

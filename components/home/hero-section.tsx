import Image from "next/image";

export function HeroSection() {
    return (
        <>
            <div className="aspect-2/1 border-x border-edge relative select-none sm:aspect-5/2 overflow-hidden flex items-center justify-center -mb-20 text-white">
                <Image src={'https://assets.harshkanjiya.com/general/brand-logo-transparent.svg'} alt="Hero Image" width={80} height={80} />
                {/* @ts-ignore */}
                <canvas id="gradient-canvas" data-transition-in></canvas>
            </div>
        </>
    );
}

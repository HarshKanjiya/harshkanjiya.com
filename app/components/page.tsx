import type { Metadata } from "next"
import Link from "next/link"
import { SITE_INFO } from "@/config/site"
import { REGISTRY_COMPONENTS } from "@/lib/registry/components"
import CustomSeparator from "@/components/custom-separator"
import { cn } from "@/lib/utils"

// Import actual components for visuals
import { HelloWorld } from "@/components/hello-world"
import { RealisticButton } from "@/components/realistic-button"

export const metadata: Metadata = {
  title: "Components",
  description: "Pixel-perfect, copy-paste ready components for your Next.js projects.",
  alternates: {
    canonical: `${SITE_INFO.url}/components`,
  },
  openGraph: {
    title: "Components",
    description: "Pixel-perfect, copy-paste ready components for your Next.js projects.",
    url: `${SITE_INFO.url}/components`,
    siteName: SITE_INFO.name,
    type: "website",
  },
}

// Edit this grid config for new components
const componentGridConfig: Record<string, { className: string; visual: React.ReactNode }> = {
  "hello-world": {
    className: "md:col-span-8 md:row-span-2 bg-gradient-to-br from-background to-muted/20",
    visual: <HelloWorld />,
  },
  "realistic-button": {
    className: "md:col-span-4 md:row-span-2 bg-black/5 flex items-center justify-center",
    visual: <RealisticButton />,
  },
  // Add new components here with their specific col/row spans and visual UI
  // example:
  // "slide-to-unlock": {
  //   className: "md:col-span-4 md:row-span-1",
  //   visual: <div className="..."><button>Slide to unlock</button></div>
  // }
}

export default function ComponentsPage() {
  return (
    <main className="mx-auto w-full *:[[id]]:scroll-mt-22 min-h-svh">
      <div className="px-0">
        <div className="px-0 pt-12">
          <h1 className="text-3xl font-semibold px-2">Components</h1>
        </div>

        <div className="p-2">
          <p className="font-mono text-sm text-balance text-muted-foreground">
            {metadata.description}
          </p>
        </div>
      </div>

      <CustomSeparator />

      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[160px] border-edge border-l border-t">
        {REGISTRY_COMPONENTS.map((comp) => {
          const config = componentGridConfig[comp.slug] || {
            className: "md:col-span-4 md:row-span-1",
            visual: (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-mono text-sm text-muted-foreground opacity-50">
                  UI pending...
                </span>
              </div>
            ),
          }

          return (
            <Link
              key={comp.slug}
              href={`/components/${comp.slug}`}
              className={cn(
                "group relative flex flex-col overflow-hidden border-b border-r border-edge bg-background transition-colors hover:bg-muted/10",
                config.className
              )}
            >
              {/* Visual UI Container */}
              <div className="relative z-10 flex h-full w-full flex-1 items-center justify-center p-6">
                {config.visual}
              </div>

              {/* Title & Info Overlay (Shows on hover or subtle default) */}
              <div className="absolute left-4 top-4 z-20 transition-opacity">
                <p className="font-mono text-xs font-medium text-foreground opacity-0 group-hover:opacity-100">
                  {comp.title}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 z-20 transition-opacity">
                <p className="font-mono text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100">
                  @harshexists/{comp.slug}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      <CustomSeparator />
      <div className="h-4" />
    </main>
  )
}

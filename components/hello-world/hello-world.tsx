import { cn } from "@/lib/utils"

interface HelloWorldProps {
  name?: string
  className?: string
}

export function HelloWorld({ name = "World", className }: HelloWorldProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl border border-edge bg-muted/40 px-4 py-3 font-mono text-sm",
        className
      )}
    >
      <span className="animate-pulse text-green-500">●</span>
      <span>
        Hello, <span className="font-semibold text-foreground">{name}</span>!
      </span>
    </div>
  )
}

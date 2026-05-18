import type React from "react"
import { HelloWorld } from "@/components/hello-world/hello-world"
import { RealisticButton } from "@/components/realistic-button"

export const componentIndex: Record<string, React.ComponentType<Record<string, unknown>>> = {
  "hello-world": HelloWorld as React.ComponentType<Record<string, unknown>>,
  "realistic-button": RealisticButton as React.ComponentType<Record<string, unknown>>,
}

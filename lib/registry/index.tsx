import type React from "react"
import { ScifiInput } from "@/components/scifi-input"
import { HelloWorld } from "@/components/hello-world/hello-world"
import { RealisticButton } from "@/components/realistic-button"
import { VerticalToggle } from "@/components/vertical-toggle"
import { Toggle } from "@/components/toggle"
import { PintchSwitch } from "@/components/pintch-switch"
import { PushButton } from "@/components/push-button"
import { ShutterCta } from "@/components/shutter-cta"

export const componentIndex: Record<string, React.ComponentType<Record<string, unknown>>> = {
  "scifi-input": ScifiInput as React.ComponentType<Record<string, unknown>>,
  "hello-world": HelloWorld as React.ComponentType<Record<string, unknown>>,
  "realistic-button": RealisticButton as React.ComponentType<Record<string, unknown>>,
  "vertical-toggle": VerticalToggle as React.ComponentType<Record<string, unknown>>,
  "toggle": Toggle as React.ComponentType<Record<string, unknown>>,
  "pintch-switch": PintchSwitch as React.ComponentType<Record<string, unknown>>,
  "shutter-cta": ShutterCta as React.ComponentType<Record<string, unknown>>,
  "push-button": PushButton as React.ComponentType<Record<string, unknown>>,
}

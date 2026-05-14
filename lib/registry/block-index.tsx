import type React from "react"
import { HeroDummy } from "@/components/blocks/hero-dummy/hero-dummy"

export const blockIndex: Record<string, React.ComponentType<Record<string, unknown>>> = {
  "hero-dummy": HeroDummy as React.ComponentType<Record<string, unknown>>,
}

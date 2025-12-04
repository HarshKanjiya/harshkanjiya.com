import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export default function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItem[];
  activeId?: string;
  className?: string;
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-6", className)}
    >
      {items.map(({ title, href }) => {
        const active =
          activeId === href ||
          (href === "/" //
            ? ["/", "/index"].includes(activeId || "")
            : activeId?.startsWith(href));

        return (
          <NavItem key={href} href={href} active={active}>
            {title}
          </NavItem>
        );
      })}
    </nav>
  );
}

export function NavItem({
  active,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
}) {
  return (
    <Link
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-[color] duration-300 flex items-center gap-2",
        active && "text-foreground"
      )}
      {...props}
    />
  );
}

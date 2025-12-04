"use client";

import { USER } from "@/data/user";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};

const Logo = () => {
  return
}

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);
  const { theme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // theme === "dark" ? "/images/logo-dark.svg" : "/images/logo-light.svg"
  return (
    <Image
      src={
        '/' + USER.avatar
      }
      alt="logo"
      data-visible={visible}
      width={32}
      height={32}
      className="translate-y-2 rounded-full border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background overflow-hidden opacity-0 transition-[opacity,translate] duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
    />
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isHome = ["/", "/index"].includes(pathname);
  return isHome ? <ChanhDaiMarkMotion /> : <Image
    alt="logo"
    width={32}
    height={32}
    className="rounded-full overflow-hidden border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background"
    src={
      '/' + USER.avatar
    }
  />;
}
// theme === "dark" ? "/images/logo-dark.svg" : "/images/logo-light.svg"

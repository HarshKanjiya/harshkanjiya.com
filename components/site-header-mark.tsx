"use client";

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
  const [src, setSrc] = useState(`https://assets.harshkanjiya.com/general/logo-dark.svg`);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    setSrc(`https://assets.harshkanjiya.com/general/logo-${theme === "dark" ? "dark" : "light"}.svg`);
  }, [theme]);

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

  return (
    <Image
      src={src}
      alt="logo"
      data-visible={visible}
      width={32}
      height={32}
      className="translate-y-2 overflow-hidden opacity-0 transition-[opacity,translate] duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
    />
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [src, setSrc] = useState(`https://assets.harshkanjiya.com/general/logo-dark.svg`);

  useEffect(() => {
    setSrc(`https://assets.harshkanjiya.com/general/logo-${theme === "dark" ? "dark" : "light"}.svg`);
  }, [theme]);

  const isHome = ["/", "/index"].includes(pathname);
  return isHome ? <ChanhDaiMarkMotion /> : <Image
    alt="logo"
    width={32}
    height={32}
    className="overflow-hidden"
    src={src}
  />;
}

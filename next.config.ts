import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://assets.harshkanjiya.com/**"),
      {
        protocol: "https",
        hostname: "assets.harshkanjiya.com",
      },
    ],
    formats: ["image/webp"],
    qualities: [100, 75],
  }
};

export default nextConfig;

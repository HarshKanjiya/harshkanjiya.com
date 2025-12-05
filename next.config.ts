import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://assets.harshkanjiya.com/**")
    ]
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  transpilePackages: ["three"],
};

export default nextConfig;

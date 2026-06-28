import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate minimal standalone server for Docker deployment
  output: "standalone",
};

export default nextConfig;
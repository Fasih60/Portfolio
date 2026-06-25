import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Allow connections from your local IP
  allowedDevOrigins: ["192.168.10.5"],
};

export default nextConfig;

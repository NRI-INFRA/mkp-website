import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/upcoming-projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

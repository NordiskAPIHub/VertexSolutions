import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "vertexsolutions.dk",
          },
        ],
        destination: "https://www.vertexsolutions.dk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

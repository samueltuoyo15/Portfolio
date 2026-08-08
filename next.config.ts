import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/9.x/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },

  // Force trailing slashes for consistency
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "samuel-tuoyo.vercel.app",
          },
        ],
        destination: "https://samueltuoyo.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

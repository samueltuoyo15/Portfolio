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
        destination: "https://samuel-tuoyo.is-a.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

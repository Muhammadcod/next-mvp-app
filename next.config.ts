import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://boderpal.netlify.app/:path*`,
        has: [
          {
            type: 'header',
            key: 'x-should-rewrite',
            value: 'true',
          },
        ],
      },
    ]
  },
}

export default nextConfig;

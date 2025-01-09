import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['pbs.twimg.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*'
      }
    ]
  }
}

export default nextConfig;

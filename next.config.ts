import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/ali', destination: '/', permanent: false },
      { source: '/ali/:path*', destination: '/', permanent: false },
      { source: '/up', destination: '/', permanent: false },
      { source: '/up/:path*', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;

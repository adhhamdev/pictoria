const { headers } = require('next/headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com', pathname: '**', protocol: 'https' },
      { hostname: 'api.unsplash.com', pathname: '**', protocol: 'https' },
    ],
  },
  async headers() {
    return [
      { source: '/api/:path*', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] },
    ];
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: false,
    }
  },
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com', pathname: '**', protocol: 'https' },
      { hostname: 'api.unsplash.com', pathname: '**', protocol: 'https' },
    ],
  },
  async headers() {
    return [
      { source: '/(.*)', headers: [{ key: 'Access-Control-Allow-Origin', value: 'https://images.unsplash.com' }] },
    ];
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com', pathname: '**', protocol: 'https' },
      { hostname: 'api.unsplash.com', pathname: '**', protocol: 'https' },
    ],
  },
};

module.exports = nextConfig;

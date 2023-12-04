/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.unsplash.com", pathname: "**", protocol: "https"}, {hostname: "api.unsplash.com", pathname: "**", protocol: "https"}]
    },
}

module.exports = nextConfig

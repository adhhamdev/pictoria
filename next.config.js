/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.unsplash.com", pathname: "**", protocol: "https"}, {hostname: "api.unsplash.com", pathname: "**", protocol: "https"}],
    },
    
    async redirects() {
        const clientId = process.env.NEXT_PUBLIC_CLIENT_ACCESS_KEY;
        return [
            {
                source: "/",
                destination: `https://unsplash.com/oauth/authorize?client_id=${clientId}&redirect_uri=https://adhham-pictoria.netlify.app/&response_type=code&scope=public+read_user+write_likes`,
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig

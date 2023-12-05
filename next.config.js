/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.unsplash.com", pathname: "**", protocol: "https"}, {hostname: "api.unsplash.com", pathname: "**", protocol: "https"}],
    },
    
    async redirects() {
        return [
            {
                source: "/",
                destination: "https://unsplash.com/oauth/authorize?client_id=eq_nBtpFvjy3KgmsPIcrmGXEsQ7-g7F1FWlJ2OOz01I&redirect_uri=https://app.netlify.com&response_type=code&scope=public+read_user+write_likes+write_photos",
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig

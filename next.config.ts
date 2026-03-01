/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    trailingSlash: true, // Stellt sicher, dass alle URLs mit "/" enden

    images: {
        unoptimized: true,
    },

    allowedDevOrigins: ["152.53.251.100"],
};

export default nextConfig;

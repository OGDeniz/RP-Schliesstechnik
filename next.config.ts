/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    trailingSlash: true, // Stellt sicher, dass alle URLs mit "/" enden

    images: {
        unoptimized: true,
    },

    experimental: {
        allowedDevOrigins: ['http://192.168.178.122'], // Erlaubt Cross-Origin-Anfragen von dieser IP
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    trailingSlash: true, // Stellt sicher, dass alle URLs mit "/" enden

    images: {
        unoptimized: true,
    },
};

export default nextConfig;

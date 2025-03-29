/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    //output: "export", // Generiert statische Seiten für "out/"-Ordner
    trailingSlash: true, // Stellt sicher, dass alle URLs mit "/" enden

    images: {
        unoptimized: true,
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export", // Generiert statische Seiten für "out/"-Ordner
    trailingSlash: true, // Stellt sicher, dass alle URLs mit "/" enden
};

export default nextConfig;

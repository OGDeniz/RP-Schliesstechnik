import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/components/*": ["components/*"],
            "@/pages/*": ["pages/*"],
            "@/styles/*": ["styles/*"],
            "@/utils/*": ["utils/*"],
        },
        "jsx": "react-jsx",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "target": "esnext",
        "module": "esnext",

        reactStrictMode: true, // Aktiviert strenge React-Prüfungen
        images: {
            // Verwende "domains", nicht "domain"
            domains: ["server.tuthub.io", "localhost", "www.tuthub.io"],
        },
        env: {
            // Umgebungsvariablen definieren
            API_URL: process.env.API_URL,
            APP_URL: process.env.APP_URL,
        },
    },
};
module.exports = nextConfig;

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    env: {
        API_URL: process.env.API_URL || 'http://localhost:3000/api',
        APP_URL: process.env.APP_URL || 'http://localhost:3000',
        API_KEY: process.env.API_KEY || 'tuthub',
        API_SECRET: process.env.API_SECRET || 'tuthub',
        API_VERSION: process.env.API_VERSION || 'v1',
        API_PORT: process.env.API_PORT || '3000',
        API_PROTOCOL: process.env.API_PROTOCOL || 'http',
        API_HOST: process.env.API_HOST || 'localhost',
        API_PATH: process.env.API_PATH || 'api',
    },

}



module.exports = nextConfig
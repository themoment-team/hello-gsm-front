/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'k.kakaocdn.net'],
  },
  env: {
    NEIS_API_KEY: process.env.NEIS_API_KEY,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'k.kakaocdn.net'],
  },
  env: {
    OPERATIONAL_STATUS: process.env.OPERATIONAL_STATUS,
  },
};

module.exports = nextConfig;

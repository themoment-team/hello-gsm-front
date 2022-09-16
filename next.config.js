const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'github.com',
      'k.kakaocdn.net',
      'hello-gsm-backend.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  env: {
    NEIS_API_KEY: process.env.NEIS_API_KEY,
    OPERATIONAL_STATUS: process.env.OPERATIONAL_STATUS,
    CLIENT_PRODUCTION_BASE_URL: process.env.CLIENT_PRODUCTION_BASE_URL,
    CLIENT_DEVELOP_BASE_URL: process.env.CLIENT_DEVELOP_BASE_URL,
    ADMIN_PRODUCTION_BASE_URL: process.env.ADMIN_PRODUCTION_BASE_URL,
  },
};

module.exports = nextConfig;

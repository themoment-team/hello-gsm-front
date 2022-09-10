const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_PRODUCTION_BASE_URL
    : process.env.CLIENT_DEVELOP_BASE_URL;

export default BASE_URL;

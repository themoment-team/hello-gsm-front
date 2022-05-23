const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  overrides: [
    {
      files: ['packages/hello-gsm/**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/hello-gsm/tsconfig.json`,
            ),
          },
        },
      },
    },
    {
      files: ['packages/hello-gsm-admin/**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/hello-gsm-admin/tsconfig.json`,
            ),
          },
        },
      },
    },
  ],
};

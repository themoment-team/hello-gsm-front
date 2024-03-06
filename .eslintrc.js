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
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'unused-imports/no-unused-imports-ts': ['error'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', ['external', 'type'], 'internal'],

        pathGroups: [
          {
            pattern: 'next',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-daum-postcode',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'axios',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@emotion/react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-toastify',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-hook-form',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'dayjs',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'components',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'pageContainer',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'utils/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'types/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'styles/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'stores/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'hooks/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['extanal'],

        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

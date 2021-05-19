module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
      },
    ],
    'max-len': 'off',
    'no-use-before-define': 'off',
  },
};

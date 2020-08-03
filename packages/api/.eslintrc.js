module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['.cache/', 'build/', 'node_modules/', 'public/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'jest'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'indent': ['error', 2],
    'max-len': ['error', { 'code': 80 }],
    'quotes': [2, 'single'],
    'react/prop-types': 'off',
    'semi': ['error', 'always'],
    'sort-imports': 'error',
    'sort-keys': 'error',
  },
};

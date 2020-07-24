module.exports = {
  env: {
    browser: true,
    mocha: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
  },
};
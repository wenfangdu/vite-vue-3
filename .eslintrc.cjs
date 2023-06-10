/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/prefer-optional-chain': 'error',
    'no-console': production
      ? [
          'error',
          {
            allow: ['warn', 'error'],
          },
        ]
      : 'off',
  },
}

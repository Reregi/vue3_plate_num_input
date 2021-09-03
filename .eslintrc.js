module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue', '@typescript-eslint', 'pug'],
  rules: {
    'no-console': 'warn',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-model-argument': 'off',
  },
};

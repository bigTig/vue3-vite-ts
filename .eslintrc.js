module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  plugins: ['vue', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'no-console': 'off',
    'comma-dangle': [2, 'never'] //禁止使用拖尾逗号
  }
};

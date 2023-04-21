/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-20 22:11:45
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-21 17:40:11
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\01-nextjs-course\.eslintrc.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',

    'next/babel',
    'next/core-web-vitals',
    'airbnb',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};

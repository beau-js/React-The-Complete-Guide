/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-16 15:44:42
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 20:42:14
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\.eslintrc.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['react'],
  rules: {
    'max-len': ['error', { ignoreComments: true }],
    'linebreak-style': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};

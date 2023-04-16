/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-16 22:16:51
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 22:50:38
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\setupProxy.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/events',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};
// https://p0.pipi.cn/mmdb/fb7386bee7ac7e338fd7c316918ec78e573ba.jpg?imageView2/1/w/464/h/644

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-10 12:11:27
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-10 13:00:02
 * @FilePath: \workspace\React-The-Complete-Guide\Diving-into-Redux\src\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

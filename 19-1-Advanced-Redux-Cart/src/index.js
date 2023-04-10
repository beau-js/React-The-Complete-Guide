/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:33:54
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 05:20:43
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import ReactDOM from "react-dom/client"

import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

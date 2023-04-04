/*
 * @Author: Ethan
 * @Date: 2022-03-30 14:14:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-30 03:14:29
 * @FilePath: \Workspace\01-starting-project_2\01-starting-project\src\index.js
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import "./index.css"
import { AuthContextProvider } from "./store/AuthContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
)

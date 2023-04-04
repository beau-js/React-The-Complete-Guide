/*
 * @Author: Ethan
 * @Date: 2022-03-30 14:14:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-31 17:23:52
 * @FilePath: \Workspace\01-starting-project_2\01-starting-project\src\App.js
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useContext } from "react"

import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import MainHeader from "./components/MainHeader/MainHeader"
import AuthContext from "./store/AuthContext"

function App() {
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  )
}

export default App

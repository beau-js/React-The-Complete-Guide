/*
 * @Author: oneShot
 * @Date: 2022-03-30 14:19:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-31 22:46:16
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\App.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import React, { useContext } from "react"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import AuthContext from "./store/AuthContext"
import CartProvider from "./store/CartProvider"

function App() {
  const ctx = useContext(AuthContext)

  return (
    <CartProvider>
      {ctx.isClickCartButton && <Cart></Cart>}
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  )
}

export default App

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:33:54
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 21:52:52
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\App.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useSelector } from "react-redux"
import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"

function App() {
  const cartIsVisble = useSelector((state) => state.ui.cartIsVisble)
  return (
    <Layout>
      {cartIsVisble && <Cart />}
      <Products />
    </Layout>
  )
}

export default App

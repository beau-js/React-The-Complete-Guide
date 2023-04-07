/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2022-03-30 14:25:38
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-07 22:25:38
 * @FilePath: \workspace\React-The-Complete-Guide\01-starting-project\01-starting-project\src\App.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

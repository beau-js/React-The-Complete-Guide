/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:46:00
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-12 15:59:40
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\store\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cart-slice"
import uiSlice from "./features/ui-slice"

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
})

export default store

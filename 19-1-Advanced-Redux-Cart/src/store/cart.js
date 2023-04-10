/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:55:12
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 05:47:47
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\store\cart.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:55:12
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 05:16:03
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\store\cart.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
  counter: 0,
  amount: 0,
  isClick: false,
}
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addHandler(state) {
      state.counter++
    },
    deleteHandler(state) {
      if (state.counter > 0) {
        state.counter--
      } else {
        console.log("counter can't < 0")
      }
    },
    clickCartHandler(state) {
      state.isClick = !state.isClick
    },
    setAddAmount(state, action) {
      state.amount += action.payload
    },
    setDeleteAmount(state, action) {
      if (state.amount > 0) {
        state.amount -= action.payload
      } else {
        console.log("amount can't < 0")
      }
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice

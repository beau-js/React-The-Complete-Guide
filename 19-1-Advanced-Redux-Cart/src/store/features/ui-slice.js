/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 16:44:01
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-12 17:22:42
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\store\features\ui-slice.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisble: false, notification: null },
  reducers: {
    tooggle(state) {
      state.cartIsVisble = !state.cartIsVisble
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-10 12:17:38
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 03:10:33
 * @FilePath: \workspace\React-The-Complete-Guide\Diving-into-Redux\src\store\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-10 12:17:38
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 02:58:42
 * @FilePath: \workspace\React-The-Complete-Guide\Diving-into-Redux\src\store\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter";
import authSlice from "./features/auth";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});



export default store;

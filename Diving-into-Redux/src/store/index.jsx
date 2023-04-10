/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-10 12:17:38
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-10 12:30:37
 * @FilePath: \workspace\React-The-Complete-Guide\Diving-into-Redux\src\store\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const redux = require("redux");

function counterReducer(state, action) {
  return state;
}

const store = redux.createStore("redux");

store.subscribe(counterReducer);

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-10 11:05:01
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-10 12:50:01
 * @FilePath: \workspace\React-The-Complete-Guide\test\redux-demo.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

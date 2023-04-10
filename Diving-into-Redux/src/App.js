/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-10 12:11:27
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 02:27:28
 * @FilePath: \workspace\React-The-Complete-Guide\Diving-into-Redux\src\App.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile"

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let loginDisplay=<Auth></Auth>
  if (isAuthenticated) {
    loginDisplay=<UserProfile></UserProfile>
  }
  return (
    <Fragment>
      <Header></Header>
      {loginDisplay}
      <Counter></Counter>
    </Fragment>
  );
}

export default App;

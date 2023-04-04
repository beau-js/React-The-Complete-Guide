/*
 * @Author: Ethan
 * @Date: 2023-03-22 20:02:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-22 20:40:02
 * @FilePath: \Workspace\newsSystem\src\App.tsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import { HashRouter } from "react-router-dom";
import IndexRouter from "./routers/IndexRouter";

const App = () => {
  return (
    <HashRouter>
      <IndexRouter></IndexRouter>
    </HashRouter>
  );
};
//test
export default App;

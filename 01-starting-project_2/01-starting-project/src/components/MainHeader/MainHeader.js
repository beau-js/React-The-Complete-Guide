/*
 * @Author: Ethan
 * @Date: 2022-03-30 14:14:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-30 02:38:38
 * @FilePath: \Workspace\01-starting-project_2\01-starting-project\src\components\MainHeader\MainHeader.js
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"

import classes from "./MainHeader.module.css"
import Navigation from "./Navigation"

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  )
}

export default MainHeader

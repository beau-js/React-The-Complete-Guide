/*
 * @Author: oneShot
 * @Date: 2022-03-31 07:47:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-02 21:54:13
 * @FilePath: \Workspace\01-starting-setup\src\components\UI\Button\Button.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"

import classes from "./Button.module.css"

const Button = (props) => {
  console.log("BUTTON RUNNING")
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default React.memo(Button)

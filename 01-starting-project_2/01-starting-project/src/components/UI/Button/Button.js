/*
 * @Author: Ethan
 * @Date: 2022-03-30 14:14:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-30 04:15:16
 * @FilePath: \Workspace\01-starting-project_2\01-starting-project\src\components\UI\Button\Button.js
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"

import classes from "./Button.module.css"

const Button = (props) => {
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

export default Button

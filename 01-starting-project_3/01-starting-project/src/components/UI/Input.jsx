/*
 * @Author: oneShot
 * @Date: 2023-03-30 20:58:19
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-31 23:13:16
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\UI\Input.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import classes from "./Input.module.scss"

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input type='text' {...props.input} ref={ref} />
    </div>
  )
})

export default Input

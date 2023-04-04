/*
 * @Author: Ethan
 * @Date: 2023-03-30 18:14:51
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-31 15:35:24
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\UI\Card.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import classes from "./Card.module.scss"

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card

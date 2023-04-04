/*
 * @Author: Ethan
 * @Date: 2023-03-29 00:06:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-29 00:43:05
 * @FilePath: \Workspace\A_COMPLETE_PRACTICE_PROJECT\src\UI\Card.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import "./Card.scss"

const Card = (props) => {
  return <div className={"card " + props.className}>{props.children}</div>
}

export default Card

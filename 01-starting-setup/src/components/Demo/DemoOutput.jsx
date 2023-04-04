/*
 * @Author: oneShot
 * @Date: 2023-04-02 20:56:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-02 21:49:38
 * @FilePath: \Workspace\01-starting-setup\src\components\Demo\DemoOutput.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING")
  return <p>{props.show ? "This is new!" : ""}</p>
}

export default React.memo(DemoOutput)

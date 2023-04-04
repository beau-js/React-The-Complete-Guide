/*
 * @Author: Ethan
 * @Date: 2022-03-30 14:14:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-30 02:12:42
 * @FilePath: \Workspace\01-starting-project_2\01-starting-project\src\components\Home\Home.js
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useContext } from "react"
import AuthContext from "../../store/AuthContext"
import Button from "../UI/Button/Button"

import Card from "../UI/Card/Card"
import classes from "./Home.module.css"

const Home = (props) => {
  const ctx = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  )
}

export default Home

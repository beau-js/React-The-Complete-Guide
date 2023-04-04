/*
 * @Author: Ethan
 * @Date: 2022-03-30 14:14:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-31 16:37:37
 * @FilePath: \Workspace\01-starting-project_2\01-starting-project\src\components\MainHeader\Navigation.js
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: Ethan
 * @Date: 2022-03-30 14:14:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-30 02:52:32
 * @FilePath: \Workspace\01-starting-project_2\01-starting-project\src\components\MainHeader\Navigation.js
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useContext } from "react"
import AuthContext from "../../store/AuthContext"

import classes from "./Navigation.module.css"

const Navigation = () => {
  const ctx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation

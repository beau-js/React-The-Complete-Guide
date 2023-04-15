/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-01-16 15:49:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-15 17:58:55
 * @FilePath: \React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\components\MainNavigation.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { NavLink } from "react-router-dom"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/events"}
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainNavigation

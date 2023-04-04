/*
 * @Author: Ethan
 * @Date: 2023-03-30 16:08:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-30 22:07:05
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\Layout\Header.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.scss"
import HeaderCartButton from "./HeaderCartButton"
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </React.Fragment>
  )
}

export default Header

/*
 * @Author: Ethan
 * @Date: 2023-03-30 17:51:09
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-30 18:09:25
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\Meals\Meals.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  )
}

export default Meals

/*
 * @Author: Ethan
 * @Date: 2023-03-30 17:52:36
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-31 22:11:09
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\Meals\AvailableMeals.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import Card from "../UI/Card"
import classes from "./AvailableMeals.module.scss"
import MealsItem from "./MealItem/MealItem"

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealsItem>
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>

      {/* <ul>{mealsList}</ul> */}
    </section>
  )
}

export default AvailableMeals

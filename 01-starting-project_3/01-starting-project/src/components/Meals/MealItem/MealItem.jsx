/*
 * @Author: Ethan
 * @Date: 2023-03-30 18:18:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-01 04:31:25
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\Meals\MealItem\MealItem.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useContext } from "react"
import classes from "./MealItem.module.scss"
import MealItemForm from "./MealItemForm"
import CartContext from "../../../store/CartContext"

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext)
  const onAddToCart = (amount) => {
    cartCtx.cartContext.addItem({ ...props, amount })
  }
  const price = `$${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCart}></MealItemForm>
      </div>
    </li>
  )
}

export default MealsItem

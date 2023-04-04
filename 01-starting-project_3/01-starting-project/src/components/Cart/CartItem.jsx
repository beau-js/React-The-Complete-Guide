/*
 * @Author: oneShot
 * @Date: 2023-04-01 00:01:47
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-01 01:51:18
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\Cart\CartItem.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import classes from "./CartItem.module.css"

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}

export default CartItem

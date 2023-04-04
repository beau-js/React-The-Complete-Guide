/*
 * @Author: oneShot
 * @Date: 2023-03-30 16:43:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-01 04:36:59
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\Layout\HeaderCartButton.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useContext, useEffect, useState } from "react"
import AuthContext from "../../store/AuthContext"
import CartContext from "../../store/CartContext"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.scss"

const HeaderCartButton = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState()
  const ctx = useContext(AuthContext)
  const cartCtx = useContext(CartContext)
  // const { items } = cartCtx
  console.log(cartCtx.cartContext.items)

  const numberOfCartItems = cartCtx.cartContext.items.reduce(
    (curNumber, item) => {
      return curNumber + item.amount
    },
    0
  )

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`

  useEffect(() => {
    if (cartCtx.cartContext.items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartCtx.cartContext.items])

  return (
    <button className={btnClasses} onClick={ctx.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton

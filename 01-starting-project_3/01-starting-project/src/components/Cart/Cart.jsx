/*
 * @Author: Ethan
 * @Date: 2023-03-30 21:31:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-01 04:32:45
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\Cart\Cart.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useContext } from "react"
import AuthContext from "../../store/AuthContext"
import CartContext from "../../store/CartContext"
import Modal from "../UI/Modal"
import classes from "./Cart.module.scss"
import CartItem from "./CartItem"

const Cart = () => {
  const ctx = useContext(AuthContext)
  const cartCtx = useContext(CartContext)
  // console.log(cartCtx.cartContext.items)
  const cartItemRemoveHandler = (id) => {
    cartCtx.cartContext.removeItem(id)
  }
  const cartItemAddHandler = (item) => {
    cartCtx.cartContext.addItem({ ...item, amount: 1 })
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          data={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  )

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={ctx.hideCartHandler}
        >
          Close
        </button>
        <button className={classes.button} /* onClick={orderHandler} */>
          Order
        </button>
      </div>
    </Modal>
  )
}

export default Cart

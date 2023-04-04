/*
 * @Author: oneShot
 * @Date: 2023-03-31 18:29:55
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-01 04:23:18
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\store\CartProvider.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useReducer } from "react"
import CartContext from "./CartContext"

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    //找到重复对象的index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    //重复的对象
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItem
    let updatedItems

    if (existingCartItem) {
      //如果重复，updatedItem=amount+action.item.amount
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      }
      updatedItems = [...state.items] //新数组=展开原数组
      updatedItems[existingCartItemIndex] = updatedItem //将更新后的对象添加进原数组
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  if (action.type === "REMOVE") {
    const existingCartItem = state.items.find((item) => item.id === action.id)
    const updatedAmount = state.totalAmount - existingCartItem.price
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    )
    let updatedItems
    let updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount - 1,
    }
    if (updatedItem.amount === 0) {
      updatedItems = state.items.filter((item) => item.id !== action.id)
    } else if (updatedItem.amount > 0) {
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    }
  }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  })

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return (
    <CartContext.Provider value={{ cartContext }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider

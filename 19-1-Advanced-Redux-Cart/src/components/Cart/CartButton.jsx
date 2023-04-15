/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:33:54
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-12 17:28:52
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\components\Cart\CartButton.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useDispatch, useSelector } from "react-redux"
import classes from "./CartButton.module.css"
import { uiActions } from "../../store/features/ui-slice.js"

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const clickCartHandler = () => {
    dispatch(uiActions.tooggle())
  }

  return (
    <button className={classes.button} onClick={clickCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  )
}

export default CartButton

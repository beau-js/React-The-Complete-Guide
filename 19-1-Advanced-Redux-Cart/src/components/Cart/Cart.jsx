/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:33:54
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 23:42:52
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\components\Cart\Cart.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useSelector } from "react-redux"
import Card from "../UI/Card"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items)
  console.log(items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart

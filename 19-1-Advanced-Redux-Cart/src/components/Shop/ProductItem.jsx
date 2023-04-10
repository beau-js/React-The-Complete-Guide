/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-11 03:33:54
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-11 06:00:44
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\components\Shop\ProductItem.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { cartActions } from "../../store/cart"
import Card from "../UI/Card"
import classes from "./ProductItem.module.css"
import { useDispatch } from "react-redux"

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, description } = props

  const addHandler = () => {
    dispatch(cartActions.addHandler())
    dispatch(cartActions.setAddAmount(price))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem

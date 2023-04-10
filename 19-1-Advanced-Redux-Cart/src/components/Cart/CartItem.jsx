import { useDispatch } from "react-redux"
import classes from "./CartItem.module.css"
import { cartActions } from "../../store/cart"

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item
  const dispatch = useDispatch()
  const addHandler = () => {
    dispatch(cartActions.addHandler())
    dispatch(cartActions.setAddAmount(price))
  }

  const deleteHandler = () => {
    dispatch(cartActions.deleteHandler())
    dispatch(cartActions.setDeleteAmount(price))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={deleteHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem

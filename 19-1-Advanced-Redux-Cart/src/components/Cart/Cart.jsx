import { useSelector } from "react-redux"
import Card from "../UI/Card"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"

const Cart = (props) => {
  const counter=useSelector((state) => state.cart.counter)
  const amount=useSelector((state) => state.cart.amount)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item", quantity: counter, total: amount, price: 6 }}
        />
      </ul>
    </Card>
  )
}

export default Cart

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2022-03-30 14:25:38
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-10 15:25:17
 * @FilePath: \workspace\React-The-Complete-Guide\01-starting-project\01-starting-project\src\components\Cart\Cart.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useContext, useState } from "react";

import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout.jsx";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmittingState, setIsSubmittingState] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitHandler = async (userData) => {
    setIsSubmittingState(true);
    await fetch(
      "https://react-http-b7ad1-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    console.log(userData);
    setIsSubmittingState(false);
    setDidSubmit(true);
    cartCtx.clearHandler();
  };

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // const isSubmitting = <p>submitting</p>;
  // const didSubmit = <p>Submitted successfully</p>;
  if (isSubmittingState) {
    return (
      <Modal onClose={props.onClose}>
        <p>submitting</p>
      </Modal>
    );
  }

  if (!isSubmittingState && didSubmit) {
    return (
      <Modal onClose={props.onClose}>
        <p>Submitted successfully</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
      </Modal>
    );
  }

  if (!isSubmittingState && !didSubmit) {
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>

        {isCheckout && (
          <Checkout
            onCancel={props.onClose}
            submitHandler={submitHandler}
            isSubmittingState={isSubmittingState}
          ></Checkout>
        )}
        {!isCheckout && modalAction}
      </Modal>
    );
  }
};

export default Cart;

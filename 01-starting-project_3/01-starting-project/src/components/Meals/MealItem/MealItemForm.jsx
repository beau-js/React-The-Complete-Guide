/*
 * @Author: Ethan
 * @Date: 2023-03-30 19:06:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-01 00:10:39
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\Meals\MealItem\MealItemForm.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useRef } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.scss"

const MealItemForm = (props) => {
  // const cartCtx = useContext(CartContext)
  const amountInputRef = useRef()
  const submitHandler = (e) => {
    // console.log(e.target)
    e.preventDefault()
    // const amount = +e.target[0].value
    const amount = +amountInputRef.current.value
    // cartCtx.addItemToCartHandler({ ...props.data, amount })
    // console.log({ ...props.data, amount })
    props.onAddToCart(amount)
  }
  return (
    <form action='' className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm

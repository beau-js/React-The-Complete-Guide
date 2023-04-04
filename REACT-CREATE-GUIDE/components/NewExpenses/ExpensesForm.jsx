/*
 * @Author: Ethan
 * @Date: 2023-03-26 11:38:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 18:21:06
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\NewExpenses\ExpensesForm.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useState } from "react"
import "./ExpensesForm.scss"

export default function ExpensesForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandle = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandle = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseDate)
    setEnteredTitle("")
    setEnteredDate("")
    setEnteredAmount("")
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandle}
            value={enteredAmount}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            min={"2019-01-01"}
            max='2023-12-31'
            onChange={dateChangeHandle}
            value={enteredDate}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button onClick={props.cancelHandler}>Cancel</button>
      </div>
    </form>
  )
}

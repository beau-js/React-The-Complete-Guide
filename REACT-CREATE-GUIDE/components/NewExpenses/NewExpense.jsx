/*
 * @Author: Ethan
 * @Date: 2023-03-26 11:38:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 18:25:31
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\NewExpenses\NewExpense.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useState } from "react"
import ExpensesForm from "./ExpensesForm"
import "./NewExpense.scss"

export default function NewExpense(props) {
  const [isAddNewExpense, setIsAddNewExpense] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.addNewExpense(expenseData)
    setIsAddNewExpense(false)
    // console.log(expenseData)
  }

  const AddNewExpenseHandler = () => {
    setIsAddNewExpense(true)
  }

  const cancelHandler = () => {
    setIsAddNewExpense(false)
  }

  return (
    <div className='new-expense'>
      {isAddNewExpense === false ? (
        <button onClick={AddNewExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpensesForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelHandler={cancelHandler}
        ></ExpensesForm>
      )}
    </div>
  )
}

/*
 * @Author: Ethan
 * @Date: 2023-03-27 16:48:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 22:20:35
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\Expenses\ExpensesList.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import ExpenseItem from "./ExpenseItem"
import "./expensesList.scss"

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expense.</h2>
  }

  return (
    <ul className='expenses-list'>
      <li>
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </li>
    </ul>
  )
}

ExpensesList.propTypes = {}

export default ExpensesList

/*
 * @Author: Ethan
 * @Date: 2023-03-24 20:52:11
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 21:42:46
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\Expenses\Expense.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useState } from "react"
import Card from "../UI/Card"
import "./Expense.scss"
import ExpensesChart from "./ExpensesChart"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"

export default function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020")
  const filterChangeHandle = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  // console.log(filteredYear)

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeFilter={filterChangeHandle}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
    </Card>
  )
}

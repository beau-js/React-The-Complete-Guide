/*
 * @Author: Ethan
 * @Date: 2023-03-24 06:09:01
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 15:22:47
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\src\App.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: Ethan
 * @Date: 2023-03-24 06:09:01
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-24 13:11:21
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\src\App.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useState } from "react"
import Expense from "../components/Expenses/Expense"
import NewExpense from "../components/NewExpenses/NewExpense"

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "car",
      amount: 100,
      date: new Date(2019, 9, 10),
    },
    {
      id: "e2",
      title: "house",
      amount: 200,
      date: new Date(2020, 8, 10),
    },
    {
      id: "e3",
      title: "woman",
      amount: 300,
      date: new Date(2021, 7, 10),
    },
    {
      id: "e4",
      title: "new TV",
      amount: 400,
      date: new Date(2022, 7, 10),
    },
  ]

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addNewExpense = (expenseData) => {
    setExpenses((preExpenses) => [expenseData, ...expenses])
  }

  return (
    <div>
      <NewExpense addNewExpense={addNewExpense}></NewExpense>
      <Expense expenses={expenses}></Expense>
    </div>
  )
}

export default App

/*
 * @Author: Ethan
 * @Date: 2023-03-27 19:05:13
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 22:16:00
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\Expenses\ExpensesChart.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import Chart from "../Chart/Chart"

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "NOv", value: 0 },
    { label: "Dec", value: 0 },
  ]

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth()
    chartDataPoints[expenseMonth].value += expense.amount
  }

  return <Chart dataPoints={chartDataPoints}></Chart>
}

export default ExpensesChart

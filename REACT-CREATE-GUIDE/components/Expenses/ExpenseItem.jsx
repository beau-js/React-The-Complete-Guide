/*
 * @Author: Ethan
 * @Date: 2023-03-24 14:30:18
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 14:59:13
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\Expenses\ExpenseItem.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.scss"

export default function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={props.date}></ExpenseDate>

        <h2>{props.title}</h2>

        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

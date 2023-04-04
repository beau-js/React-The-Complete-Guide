/*
 * @Author: Ethan
 * @Date: 2023-03-24 17:02:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-24 21:49:18s
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\ExpenseDate.jsx
 * @Description: 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import "./ExpenseDate.scss";

export default function ExpenseDate(props) {

  const month = props.date.toLocaleString(`zh`, { month: `long` });
  const day = props.date.toLocaleString(`zh`, { day: `2-digit` });
  const year = props.date.toLocaleString(`zh`, { year: `numeric` });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

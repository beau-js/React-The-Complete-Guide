/*
 * @Author: Ethan
 * @Date: 2023-03-27 18:40:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 22:15:16
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\Chart\ChartBar.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import "./ChartBar.scss"

const ChartBar = (props) => {
  let barFillHeight = "0%"
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  )
}

export default ChartBar

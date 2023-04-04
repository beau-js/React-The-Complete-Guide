/*
 * @Author: Ethan
 * @Date: 2023-03-27 18:40:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 21:45:16
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\Chart\Chart.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import "./Chart.scss"
import ChartBar from "./ChartBar"

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  )
}

export default Chart

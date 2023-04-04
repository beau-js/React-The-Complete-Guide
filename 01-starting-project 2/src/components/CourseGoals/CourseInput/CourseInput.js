/*
 * @Author: Ethan
 * @Date: 2023-03-27 22:25:18
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-27 23:08:58
 * @FilePath: \Workspace\01-starting-project 2\src\components\CourseGoals\CourseInput\CourseInput.js
 * @Description: 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import './CourseInput.css'

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }

    props.onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default CourseInput

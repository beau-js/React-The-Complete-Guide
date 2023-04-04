/*
 * @Author: Ethan
 * @Date: 2023-03-28 16:32:18
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-29 15:58:14
 * @FilePath: \Workspace\A_COMPLETE_PRACTICE_PROJECT\src\components\NewUserForm.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useRef, useState } from "react"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"
import "./NewUserForm.scss"
const NewUserForm = (props) => {
  const [isValid, setIsValid] = useState(true)
  const [message, setMessage] = useState("")
  const [title, setTitle] = useState("")

  const nameInput = useRef()
  const ageInput = useRef()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const enteredUsername = nameInput.current.value
    const enteredUserAge = ageInput.current.value
    if (enteredUsername.length < 1 || enteredUserAge.length < 1) {
      setIsValid(false)
      setTitle("Invalid input")
      setMessage("Must input username and age")
      return
    } else if (+enteredUserAge < 0) {
      setIsValid(false)
      setTitle("Invalid age")
      setMessage("Must input age and age must > 0")

      return
    }

    const enteredData = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredUserAge,
    }

    props.addUser(enteredData)
    nameInput.current.value = ""
    ageInput.current.value = ""
  }

  const oKayHandler = () => {
    setIsValid(true)
  }

  return (
    <React.Fragment>
      {!isValid && (
        <ErrorModal
          title={title}
          message={message}
          okayHandler={oKayHandler}
        ></ErrorModal>
      )}
      <Card className='addUserForm'>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor=''>Username</label>
          <input type='text' ref={nameInput} />
          <label htmlFor=''>age(Year)</label>
          <input type='number' ref={ageInput} />
          <button type='submit'>Add User</button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default NewUserForm

/*
 * @Author: Ethan
 * @Date: 2023-03-28 18:25:24
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-29 00:44:21
 * @FilePath: \Workspace\A_COMPLETE_PRACTICE_PROJECT\src\components\Users.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useState } from "react"
import Card from "../UI/Card"
import NewUserForm from "./NewUserForm"
import "./Users.scss"
import UsersStore from "./UsersStore"

const Users = () => {
  const [usersData, setUsersData] = useState([
    {
      id: "1",
      username: "Max",
      age: 31,
    },
  ])

  const addUser = (enteredData) => {
    setUsersData((prevUsersData) => [enteredData, ...prevUsersData])
  }

  const delUser = (id) => {
    // console.log(id)
    setUsersData((prevUsersData) => {
      const updateUsers = prevUsersData.filter((item) => item.id !== id)
      // console.log(updateUsers, "updateUsers")
      return updateUsers
    })
  }

  return (
    <Card className='users'>
      <NewUserForm addUser={addUser}></NewUserForm>
      <UsersStore usersData={usersData} onDelete={delUser}></UsersStore>
    </Card>
  )
}

export default Users

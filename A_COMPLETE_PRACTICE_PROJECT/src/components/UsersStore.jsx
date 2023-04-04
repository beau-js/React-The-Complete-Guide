/*
 * @Author: Ethan
 * @Date: 2023-03-28 18:26:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-29 01:06:25
 * @FilePath: \Workspace\A_COMPLETE_PRACTICE_PROJECT\src\components\UsersStore.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import Card from "../UI/Card"
import "./UsersStore.scss"

const UsersStore = (props) => {
  // console.log(props.usersData, "Store")
  // const oLi = document.querySelector("li")
  const deleteEle = (e) => {
    props.onDelete(e.target.id)
  }

  return (
    <Card className='users-store'>
      <ul>
        {props.usersData.map((item) => (
          <li key={item.id} id={item.id} onClick={deleteEle}>
            {item.username} ({item.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersStore

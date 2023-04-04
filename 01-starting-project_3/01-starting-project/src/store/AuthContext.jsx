/*
 * @Author: Ethan
 * @Date: 2023-03-31 16:18:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-31 18:26:48
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\store\AuthContext.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useState } from "react"

const AuthContext = React.createContext()

export const AuthContextProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isClickCartButton: cartIsShown,
        showCartHandler,
        hideCartHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext

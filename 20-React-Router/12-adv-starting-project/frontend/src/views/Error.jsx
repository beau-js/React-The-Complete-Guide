/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-15 17:52:22
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-15 19:26:48
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\views\Error.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import PageContent from "../components/PageContent"
import { useRouteError } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const Error = () => {
  const error = useRouteError()

  let title = "An error occurred"
  let message = "Something went wrong"
  if (error.status === 404) {
    title = "Page not found"
    message = "The page you are looking for could not be found."
  }

  if (error.status === 500) {
    message = error.data.message
  }

  return (
    <>
      <MainNavigation></MainNavigation>
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
    </>
    
  )
}

export default Error

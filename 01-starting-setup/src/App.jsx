/*
 * @Author: oneShot
 * @Date: 2022-03-31 07:47:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-02 22:24:20
 * @FilePath: \Workspace\01-starting-setup\src\App.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useCallback, useState } from "react"
import DemoOutput from "./components/Demo/DemoOutput"
import Button from "./components/UI/Button/Button"

import "./App.css"

function App() {

  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  console.log("APP RUNNING")

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }
  
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={toggleParagraph}>Toggle Paragraph!!</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle!!</Button>
    </div>
  )
}

export default App

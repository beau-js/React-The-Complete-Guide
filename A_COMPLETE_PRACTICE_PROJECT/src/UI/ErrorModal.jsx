/*
 * @Author: Ethan
 * @Date: 2023-03-29 00:03:55
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-29 13:40:42
 * @FilePath: \Workspace\A_COMPLETE_PRACTICE_PROJECT\src\UI\ErrorModal.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import classes from "./ErrorModal.module.scss"

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button type='submit' onClick={props.onConfirm}>
          Okay
        </button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.okayHandler}></Backdrop>,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.okayHandler}
        ></ModalOverlay>,
        document.querySelector("#overlay-root")
      )}
    </React.Fragment>
  )
}

export default ErrorModal

/*
 * @Author: Ethan
 * @Date: 2023-03-31 14:12:19
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-31 17:47:20
 * @FilePath: \Workspace\01-starting-project_3\01-starting-project\src\components\UI\Modal.jsx
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { useContext } from "react"
import { createPortal } from "react-dom"
import AuthContext from "../../store/AuthContext"
import classes from "./Modal.module.scss"

const Backdrop = () => {
  const ctx = useContext(AuthContext)
  return <div className={classes.backdrop} onClick={ctx.hideCartHandler}></div>
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.querySelector("#overlays")

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop></Backdrop>, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  )
}

export default Modal

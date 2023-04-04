import React, { useRef } from "react"
import Button from "../Button/Button"
import Card from "../Card/Card"
import classes from "./Input.module.scss"

const Input = (props) => {
  const inputRef = useRef()

  const activate = () => {
    inputRef.current.focus()
  }

  console.log(props)
  return (
    <Card className={classes.login}>
      <div
        className={`${classes.control} ${
          props.isEmailValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>E-Mail</label>
        <input
          ref={props.emailRef}
          type='email'
          id={props.id}
          value={props.value}
          onChange={props.onEmailChange}
          onBlur={props.onEmailBlur}
        />
      </div>
      <div
        className={`${classes.control} ${
          props.isPasswordValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor='password'>Password</label>
        <input
          ref={props.passwordRef}
          type='password'
          id='password'
          value={props.passwordValue}
          onChange={props.onPasswordChange}
          onBlur={props.onPasswordBlur}
        />
      </div>
      <div className={classes.actions}>
        <Button
          type='submit'
          className={classes.btn}
          // disabled={props.onDisabled}
        >
          Login
        </Button>
      </div>
    </Card>
  )
}

export default Input

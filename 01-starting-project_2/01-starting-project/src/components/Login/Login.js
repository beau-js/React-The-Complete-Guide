import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"
import AuthContext from "../../store/AuthContext"

import Input from "../UI/Input/Input"
// import classes from "./Login.module.css"

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("")
  // const [emailIsValid, setEmailIsValid] = useState()
  // const [enteredPassword, setEnteredPassword] = useState("")
  // const [passwordIsValid, setPasswordIsValid] = useState()

  const [formIsValid, setFormIsValid] = useState(false)

  const passwordReducer = (state, action) => {
    if (action.type === "PASSWORD_INPUT") {
      return { value: action.val, isValid: action.val.trim().length > 6 }
    }
    if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.trim().length > 6 }
    }
  }
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  })

  const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val.includes("@") }
    }
    if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.includes("@") }
    }
    return { value: "", isValid: false }
  }

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  })

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity")
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500)
    return () => {
      console.log("CLEAN")
      clearTimeout(identifier)
    }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value })
    setFormIsValid(
      event.target.value.includes("@") && passwordState.value.trim().length > 6
    )
  }

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value)
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value })
    setFormIsValid(emailState.value && event.target.value.trim().length > 6)
  }

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid)
    dispatchEmail({ type: "INPUT_BLUR" })
  }

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.isValid)
    dispatchPassword({ type: "INPUT_BLUR" })
  }

  const ctx = useContext(AuthContext)
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const submitHandler = (event) => {
    event.preventDefault()
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value)
    } else if (!emailIsValid) {
      emailInputRef.current.activate
    } else {
      passwordInputRef.current.activate
    }
  }

  return (
    // <Card /* className={classes.login} */>
    <form onSubmit={submitHandler}>
      <Input
        emailRef={emailInputRef}
        passwordRef={passwordInputRef}
        isEmailValid={emailState.isValid}
        emailValue={emailState.value}
        onEmailChange={emailChangeHandler}
        onEmailBlur={validateEmailHandler}
        isPasswordValid={passwordState.isValid}
        passwordValue={passwordState.value}
        onPasswordChange={passwordChangeHandler}
        onPasswordBlur={validatePasswordHandler}
        // onDisabled={!formIsValid}
      ></Input>

      {/* <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div> */}
    </form>
    // </Card>
  )
}

export default Login

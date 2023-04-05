import useBasicInput from "../hooks/use-basic-input";

/*
 * @Author: oneShot
 * @Date: 2022-03-30 14:25:00
 * @LastEditors: oneShot e.beautrader@outlook.com
 * @LastEditTime: 2023-04-06 06:17:33
 * @FilePath: \Workspace\01-starting-project_7\01-starting-project\src\components\BasicForm.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const BasicForm = (props) => {
  const {
    enteredValue: firstNameEnteredValue,
    isValid: firstNameIsValid,
    isInValid: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    enteredValue: lastNameEnteredValue,
    isValid: lastNameIsValid,
    isInValid: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    enteredValue: emailEnteredValue,
    isValid: emailIsValid,
    isInValid: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useBasicInput((value) => value.includes("@"));

  const submitHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid) {
      return;
    }
    console.log(firstNameEnteredValue);
    console.log(lastNameEnteredValue);
    console.log(emailEnteredValue);
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameEnteredValue}
          />
          {firstNameHasError && (
            <p className="error-text">must input first name!</p>
          )}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameEnteredValue}
          />
          {lastNameHasError && (
            <p className="error-text">must input last name!</p>
          )}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailEnteredValue}
        />
        {emailHasError && <p className="error-text">email must have "@"</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

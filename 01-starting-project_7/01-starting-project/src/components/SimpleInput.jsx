/*
 * @Author: oneShot
 * @Date: 2022-03-30 14:25:00
 * @LastEditors: oneShot e.beautrader@outlook.com
 * @LastEditTime: 2023-04-06 03:44:09
 * @FilePath: \Workspace\01-starting-project_7\01-starting-project\src\components\SimpleInput.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: oneShot
 * @Date: 2022-03-30 14:25:00
 * @LastEditors: oneShot e.beautrader@outlook.com
 * @LastEditTime: 2023-04-05 17:18:17
 * @FilePath: \Workspace\01-starting-project_7\01-starting-project\src\components\SimpleInput.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Input from "../UI/Input";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    ValueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
    valueIsValid: enteredNameIsValid,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    ValueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    valueIsValid: enteredEmailIsValid,
  } = useInput((value) => value.includes("@") && value.trim().length > 6);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredEmailTouched(true);

    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();

    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        id="name"
        inputName={`Your Name`}
        enteredValue={enteredName}
        InputClasses={nameInputClasses}
        InputChangeHandler={nameChangeHandler}
        InputBlurHandler={nameBlurHandler}
        nameInputIsInvalid={nameInputHasError}
      ></Input>
      <Input
        id="email"
        inputName={`Email`}
        enteredValue={enteredEmail}
        InputClasses={emailInputClasses}
        InputChangeHandler={emailChangeHandler}
        InputBlurHandler={emailBlurHandler}
        emailInputIsInvalid={emailInputHasError}
      ></Input>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

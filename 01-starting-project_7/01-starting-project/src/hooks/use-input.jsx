import { useState } from "react";

/*
 * @Author: oneShot
 * @Date: 2023-04-06 02:15:03
 * @LastEditors: oneShot e.beautrader@outlook.com
 * @LastEditTime: 2023-04-06 03:33:21
 * @FilePath: \Workspace\01-starting-project_7\01-starting-project\src\hooks\use-input.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const ValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    if (!validateValue(event.target.value)) {
      setIsTouched(true);
    }
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    ValueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;

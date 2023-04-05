import { useReducer } from "react";

/*
 * @Author: oneShot
 * @Date: 2023-04-06 04:03:50
 * @LastEditors: oneShot e.beautrader@outlook.com
 * @LastEditTime: 2023-04-06 07:04:31
 * @FilePath: \Workspace\01-starting-project_7\01-starting-project\src\hooks\use-basic-input.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "change") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "blur") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "reset") {
    return { value: "", isTouched: false };
  }
  return;
};

const useBasicInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(inputState.value);
  const isInValid = !isValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({
      type: "change",
      value: e.target.value,
    });
  };

  const inputBlurHandler = () => {
    dispatch({
      type: "blur",
    });
  };

  const reset = () => {
    dispatch({
      type: "reset",
    });
  };
  return {
    enteredValue: inputState.value,
    isValid,
    isInValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useBasicInput;

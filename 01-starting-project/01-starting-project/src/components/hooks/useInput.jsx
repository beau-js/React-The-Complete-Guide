import { useRef, useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [changeBlur, setChangeBlur] = useState(false);
  const inputRef = useRef();

  const isValid = inputValue.trim() !== "";
  const isInvalid = !isValid && changeBlur;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setChangeBlur(true);
  };

  const reset = () => {
    setInputValue("");
    setChangeBlur(false);
  };

  return {
    inputValue,
    inputRef,
    isValid,
    isInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

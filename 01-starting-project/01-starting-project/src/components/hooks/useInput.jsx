import { useRef, useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const isValid = inputValue.trim() !== "";
  const isInvalid = !isValid;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setInputValue(true);
    }
  };
};

export default useInput;

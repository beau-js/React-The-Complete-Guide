import React from "react";

const Input = (props) => {
  let errorMessage;
  if (props.nameInputIsInvalid) {
    errorMessage = <p className="error-text">name must not be empty.</p>;
  } else if (props.emailInputIsInvalid) {
    errorMessage = (
      <p className="error-text">
        Email must have"@" and at least six characters.
      </p>
    );
  }
  return (
    <>
      <div className={props.InputClasses}>
        <label htmlFor={props.id}>{props.inputName}</label>
        <input
          type="text"
          id={props.id}
          onChange={props.InputChangeHandler}
          onBlur={props.InputBlurHandler}
          value={props.enteredValue}
        />
        {errorMessage}
      </div>
    </>
  );
};

export default Input;

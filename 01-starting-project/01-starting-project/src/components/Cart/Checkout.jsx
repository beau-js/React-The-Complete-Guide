/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-07 18:50:27
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-09 19:02:04
 * @FilePath: \workspace\React-The-Complete-Guide\01-starting-project\01-starting-project\src\components\Cart\Checkout.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import useInput from "../hooks/useInput";
import classes from "./Checkout.module.scss";

const Checkout = (props) => {
  const {
    inputValue: nameInputValue,
    inputRef: nameInputRef,
    isValid: nameIsValid,
    isInvalid: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameIsTouched,
    reset: nameReset,
  } = useInput();
  const {
    inputValue: streetInputValue,
    inputRef: streetInputRef,
    isValid: streetIsValid,
    isInvalid: streetHasError,
    inputChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetIsTouched,
    reset: streetReset,
  } = useInput();
  const {
    inputValue: postalInputValue,
    inputRef: postalInputRef,
    isValid: postalIsValid,
    isInvalid: postalHasError,
    inputChangeHandler: postalInputChangeHandler,
    inputBlurHandler: postalIsTouched,
    reset: postalReset,
  } = useInput();
  const {
    inputValue: cityInputValue,
    inputRef: cityInputRef,
    isValid: cityIsValid,
    isInvalid: cityHasError,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityIsTouched,
    reset: cityReset,
  } = useInput();

  const userData = {
    username: nameInputValue,
    street: streetInputValue,
    postal: postalInputValue,
    city: cityInputValue,
  };

  const confirmHandler = (event) => {
    event.preventDefault();
    nameIsTouched();
    streetIsTouched();
    postalIsTouched();
    cityIsTouched();

    if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
      props.submitHandler(userData);
      nameReset();
      streetReset();
      postalReset();
      cityReset();
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${nameHasError && classes.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          value={nameInputValue}
          onBlur={nameIsTouched}
        />
        {nameHasError && <p>must input name</p>}
      </div>

      <div
        className={`${classes.control} ${streetHasError && classes.invalid}`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          ref={streetInputRef}
          onChange={streetInputChangeHandler}
          value={streetInputValue}
          onBlur={streetIsTouched}
        />
        {streetHasError && <p>must input street</p>}
      </div>

      <div
        className={`${classes.control} ${postalHasError && classes.invalid}`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          ref={postalInputRef}
          onChange={postalInputChangeHandler}
          value={postalInputValue}
          onBlur={postalIsTouched}
        />
        {postalHasError && <p>must input Postal Code</p>}
      </div>

      <div className={`${classes.control} ${cityHasError && classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          ref={cityInputRef}
          onChange={cityInputChangeHandler}
          value={cityInputValue}
          onBlur={cityIsTouched}
        />
        {cityHasError && <p>must input City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

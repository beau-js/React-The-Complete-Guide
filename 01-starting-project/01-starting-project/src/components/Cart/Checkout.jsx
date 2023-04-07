/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-07 18:50:27
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-08 05:07:29
 * @FilePath: \workspace\React-The-Complete-Guide\01-starting-project\01-starting-project\src\components\Cart\Checkout.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { useRef, useState } from "react";
import classes from "./Checkout.module.scss";

const Checkout = (props) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [streetInputValue, setStreetInputValue] = useState("");
  const [postalInputValue, setPostalInputValue] = useState("");
  const [cityInputValue, setCityInputValue] = useState("");

  const [nameIsValid, setNameIsValid] = useState(true);
  const [streetIsValid, setStreetIsValid] = useState(true);
  const [postalIsValid, setPostalIsValid] = useState(true);
  const [cityIsValid, setCityIsValid] = useState(true);

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setNameInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setNameIsValid(true);
    }
  };
  const streetInputChangeHandler = (event) => {
    setStreetInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setStreetIsValid(true);
    }
  };
  const postalInputChangeHandler = (event) => {
    setPostalInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setPostalIsValid(true);
    }
  };
  const cityInputChangeHandler = (event) => {
    setCityInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setCityIsValid(true);
    }
  };

  const confirmHandler = (event) => {
    event.preventDefault();
    if (nameInputRef.current.value.trim() === "") {
      setNameIsValid(false);
      return;
    }
    if (streetInputRef.current.value.trim() === "") {
      setStreetIsValid(false);
      return;
    }
    if (postalInputRef.current.value.trim() === "") {
      setPostalIsValid(false);
      return;
    }
    if (cityInputRef.current.value.trim() === "") {
      setCityIsValid(false);
      return;
    }

    console.log(nameInputRef.current.value);
    console.log(streetInputRef.current.value);
    console.log(postalInputRef.current.value);
    console.log(cityInputRef.current.value);

    setNameInputValue("");
    setStreetInputValue("");
    setPostalInputValue("");
    setCityInputValue("");
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${!nameIsValid && classes.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          value={nameInputValue}
        />
        {!nameIsValid && <p>must input name</p>}
      </div>

      <div
        className={`${classes.control} ${!streetIsValid && classes.invalid}`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          ref={streetInputRef}
          onChange={streetInputChangeHandler}
          value={streetInputValue}
        />
        {!streetIsValid && <p>must input name</p>}
      </div>

      <div
        className={`${classes.control} ${!postalIsValid && classes.invalid}`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          ref={postalInputRef}
          onChange={postalInputChangeHandler}
          value={postalInputValue}
        />
        {!postalIsValid && <p>must input name</p>}
      </div>

      <div className={`${classes.control} ${!cityIsValid && classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          ref={cityInputRef}
          onChange={cityInputChangeHandler}
          value={cityInputValue}
        />
        {!cityIsValid && <p>must input name</p>}
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

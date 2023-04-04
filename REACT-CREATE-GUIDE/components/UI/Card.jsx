/*
 * @Author: Ethan
 * @Date: 2023-03-24 22:06:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-25 00:42:23
 * @FilePath: \Workspace\REACT-CREATE-GUIDE\components\UI\Card.jsx
 * @Description: 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import "./Card.scss";

export default function Card(props) {

  const classes = "card " + props.className;
  return (
    <div className={classes}>{props.children}</div>
  );
}



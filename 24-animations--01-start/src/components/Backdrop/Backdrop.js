/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2017-10-24 17:48:46
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-23 20:04:55
 * @FilePath: \workspace\React-The-Complete-Guide\24-animations--01-start\src\components\Backdrop\Backdrop.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];
  return <div className={cssClasses.join(' ')}></div>;
};

export default backdrop;

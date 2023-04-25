/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-12 03:14:50
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-25 14:14:09
 * @FilePath: \workspace\React-The-Complete-Guide\19-1-Advanced-Redux-Cart\src\components\UI\Notification.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import classes from './Notification.module.css';

const Notification = (props) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;

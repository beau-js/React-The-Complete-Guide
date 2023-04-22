/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-21 20:54:44
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-22 07:54:42
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\components\meetups\MeetupDetail.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import classes from './MeetupDetail.module.css';

function MeetupDetail({ image, title, address, description }) {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;

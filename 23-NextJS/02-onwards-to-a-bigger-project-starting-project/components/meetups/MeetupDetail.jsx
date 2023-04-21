/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-21 20:54:44
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-21 21:37:40
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\components\meetups\MeetupDetail.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import classes from './MeetupDetail.module.css';

function MeetupDetail({ data }) {
  return (
    <section className={classes.detail}>
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <address>{data.address}</address>
      <p>{data.description}</p>
    </section>
  );
}

export default MeetupDetail;

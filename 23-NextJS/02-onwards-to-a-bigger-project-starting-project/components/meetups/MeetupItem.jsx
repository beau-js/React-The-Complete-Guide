/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2021-03-24 15:47:18
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-22 07:18:06
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\components\meetups\MeetupItem.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem({ image, title, address, id }) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push({
      pathname: `/${id}`,
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button type="submit" onClick={showDetailsHandler}>
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

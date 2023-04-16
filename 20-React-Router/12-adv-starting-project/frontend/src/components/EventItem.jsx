/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-01-16 15:49:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 23:07:34
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\components\EventItem.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button type="button" onClick={startDeleteHandler}>
          Delete
        </button>
      </menu>
    </article>
  );
}

export default EventItem;

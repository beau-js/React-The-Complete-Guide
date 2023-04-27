/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2022-11-11 13:30:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-25 14:22:21
 * @FilePath: \workspace\React-The-Complete-Guide\21-Authentication\frontend\src\components\EventItem.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Link, useSubmit, useRouteLoaderData } from 'react-router-dom';

import classes from './EventItem.module.css';

function EventItem({ event }) {
  const token = useRouteLoaderData('root');
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
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button type="submit" onClick={startDeleteHandler}>
            Delete
          </button>
        </menu>
      )}
    </article>
  );
}

export default EventItem;

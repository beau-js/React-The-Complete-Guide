/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-01-16 15:49:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 17:54:08
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\components\EventsList.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// import { useLoaderData } from "react-router-dom"
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EventsList.module.css';

function EventsList({ events }) {
  // const events = useLoaderData()
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;

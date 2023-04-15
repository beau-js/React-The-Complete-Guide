/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-13 20:55:20
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-13 23:59:52
 * @FilePath: \React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\views\EventsPage.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"
import { NavLink } from "react-router-dom"

const EVENTS = [
  {
    id: "p1",
    title: "Event 1",
  },
  {
    id: "p2",
    title: "Event 2",
  },
  {
    id: "p3",
    title: "Event 3",
  },
]

const EventsPage = () => {
  return (
    <>
      <NavLink to={"/events/"}>
        <h1>EventsPage</h1>
      </NavLink>

      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <NavLink to={`/events/${event.id}`}>{event.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EventsPage

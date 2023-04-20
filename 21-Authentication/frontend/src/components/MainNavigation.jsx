/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2022-11-11 13:30:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-20 04:54:21
 * @FilePath: \workspace\React-The-Complete-Guide\21-Authentication\frontend\src\components\MainNavigation.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/newsletter" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Newsletter
            </NavLink>
          </li>
          {!token && (
          <li>
            <NavLink to="/auth/?mode=login" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Authentication
            </NavLink>
          </li>
          )}
          {token && (
          <li>
            <Form action="/logout" method="post">
              <button type="submit">Logout</button>
            </Form>
          </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-14 17:49:33
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 16:13:22
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\components\EventsRootLayout.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import EventsNavigation from './EventsNavigation';

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;

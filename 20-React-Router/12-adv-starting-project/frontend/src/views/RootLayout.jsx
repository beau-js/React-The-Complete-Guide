/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-14 17:43:18
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 16:20:35
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\views\RootLayout.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' && <p>loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

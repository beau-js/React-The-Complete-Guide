/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2022-11-11 13:30:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-20 06:09:06
 * @FilePath: \workspace\React-The-Complete-Guide\21-Authentication\frontend\src\pages\Root.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { useEffect } from 'react';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log('tokenDuration', tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-20 03:59:26
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-20 06:10:18
 * @FilePath: \workspace\React-The-Complete-Guide\21-Authentication\frontend\src\util\auth.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/auth');
  }
  return null;
}

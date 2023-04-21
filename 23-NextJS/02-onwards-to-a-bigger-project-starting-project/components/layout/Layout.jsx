/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2021-03-24 15:47:18
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-21 18:50:03
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\components\layout\Layout.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-15 18:00:09
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 17:45:02
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\components\PageContent.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import classes from './PageContent.module.css';

function PageContent({ title, children }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;

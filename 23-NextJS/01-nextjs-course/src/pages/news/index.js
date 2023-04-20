/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-20 22:09:09
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-20 22:56:36
 * @FilePath: \workspace\React-The-Complete-Guide\23-nextjs-course\src\pages\news\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
//our - domain.com / news;

import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/great">NextJs Is A Great Framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}

export default NewsPage;

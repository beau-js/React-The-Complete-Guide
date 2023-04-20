/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-20 22:26:56
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-20 22:39:57
 * @FilePath: \workspace\React-The-Complete-Guide\23-nextjs-course\src\pages\news\[newsId].js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// our-domain.com/news/something-important;

import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>The Detail Page</h1>;
}

export default DetailPage;

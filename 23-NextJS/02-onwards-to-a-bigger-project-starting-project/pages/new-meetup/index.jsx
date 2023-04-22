/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-21 16:35:58
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-22 06:28:11
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\pages\new-meetup\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

// our-domain.com/new-meetup

import { useRouter } from 'next/router';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      // 发送请求
      method: 'POST', // 请求方法
      body: JSON.stringify(enteredMeetupData), // 请求体数据
      headers: {
        'Content-Type': 'application/json', // 请求头
      },
    });
    const data = await response.json(); // 获取响应体数据
    console.log(data);

    router.push('/'); // 跳转到首页
  };

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;

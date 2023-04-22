/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-21 16:34:10
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-23 01:44:10
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\pages\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const { res } = context;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    // 链接数据库
    'mongodb+srv://beau:xZVa6phyP3JexVMr@cluster0.pqiuyaf.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db(); // 获取数据库
  const meetupsCollection = db.collection('meetups'); // 获取集合
  const meetups = await meetupsCollection.find().toArray(); // 获取集合中的数据
  client.close(); // 关闭数据库链接

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        // eslint-disable-next-line no-underscore-dangle
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

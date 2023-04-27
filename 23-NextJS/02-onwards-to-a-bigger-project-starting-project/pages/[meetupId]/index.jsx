/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-21 16:39:38
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-26 14:46:48
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\pages\[meetupId]\index.jsx
 * @Description
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails({ meetupData }) {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>

      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  // 链接数据库
  const client = await MongoClient.connect(
    'mongodb+srv://beau:xZVa6phyP3JexVMr@cluster0.pqiuyaf.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db(); // 获取数据库
  const meetupsCollection = db.collection('meetups'); // 获取集合
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // 获取集合中的数据
  client.close(); // 关闭数据库链接

  return {
    fallback: false, // 为false时，如果没有生成静态页面，会报404错误

    paths: meetups.map((meetup) => ({
      // 生成静态页面的路径
      // eslint-disable-next-line no-underscore-dangle
      params: { meetupId: meetup._id.toString() }, // 生成静态页面的参数
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  // 获取参数
  const { meetupId } = context.params;

  // 链接数据库
  const client = await MongoClient.connect(
    'mongodb+srv://beau:xZVa6phyP3JexVMr@cluster0.pqiuyaf.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  // 获取数据库
  const db = client.db();
  // 获取集合
  const meetupsCollection = db.collection('meetups');

  // 获取集合中的数据
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        // eslint-disable-next-line no-underscore-dangle
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;

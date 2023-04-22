/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-22 02:21:56
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-22 06:29:47
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\pages\api\new-meetup.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    // 判断请求方法
    const data = req.body; // 获取请求体数据

    // store that in a database or in a file

    const client = await MongoClient.connect(
      // 链接数据库
      'mongodb+srv://beau:xZVa6phyP3JexVMr@cluster0.pqiuyaf.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db(); // 获取数据库
    const meetupsCollection = db.collection('meetups'); // 获取集合
    const result = await meetupsCollection.insertOne(data); // 插入数据
    console.log(result); // 打印插入结果

    client.close(); // 关闭数据库链接

    res.status(201).json({ message: 'Meetup inserted!' }); // 返回状态码
  }

}

export default handler;

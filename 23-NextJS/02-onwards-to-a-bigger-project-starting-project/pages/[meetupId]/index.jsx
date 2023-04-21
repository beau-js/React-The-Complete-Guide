/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-21 16:39:38
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-21 21:31:18
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\pages\[meetupId]\index.jsx
 * @Description
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  const router = useRouter();
  console.log(router.query);
  const { image, title, address, description } = router.query;
  return <MeetupDetail data={{ image, title, address, description }} />;
}

export default MeetupDetails;

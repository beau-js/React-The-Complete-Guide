/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-21 16:34:10
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-21 21:42:49
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\pages\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://th.bing.com/th/id/R.d14e2f7345a0c2d8dde8a3f12e0cb9f9?rik=HgDYHvQkRVW0Og&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180704%2f4ccb56d57a74492ab686fc6ea63ca6c4.jpeg&ehk=0gtgG59yYPcZI%2fF1DMMBdl8D7EYhX0jQ8y4fd9oDsZ4%3d&risl=&pid=ImgRaw&r=0',
    address: 'Some address 5, 12345 Some City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://th.bing.com/th/id/R.d14e2f7345a0c2d8dde8a3f12e0cb9f9?rik=HgDYHvQkRVW0Og&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180704%2f4ccb56d57a74492ab686fc6ea63ca6c4.jpeg&ehk=0gtgG59yYPcZI%2fF1DMMBdl8D7EYhX0jQ8y4fd9oDsZ4%3d&risl=&pid=ImgRaw&r=0',
    address: 'Some address 10, 12345 Some City',
    description:
      'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;

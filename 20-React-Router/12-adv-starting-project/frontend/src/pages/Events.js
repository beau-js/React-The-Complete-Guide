/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-17 16:19:05
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-17 16:28:21
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\pages\Events.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const { events } = data;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      },
    );
  } else {
    return response;
  }
}

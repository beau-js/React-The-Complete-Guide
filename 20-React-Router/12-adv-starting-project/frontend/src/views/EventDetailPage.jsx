/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-13 20:55:20
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 02:33:26
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\views\EventDetailPage.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("eventDetail");
  return <EventItem event={data.event}></EventItem>;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}

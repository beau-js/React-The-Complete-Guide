/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-13 20:55:20
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 02:34:57
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\views\EditEventPage.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
const EditEventPage = () => {
  const data = useRouteLoaderData("eventDetail");
  console.log(data);
  const event = data.event;
  return <EventForm event={event}></EventForm>;
};

export default EditEventPage;

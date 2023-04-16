/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-13 20:55:20
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 15:57:57
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\views\EditEventPage.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

function EditEventPage() {
  const data = useRouteLoaderData('eventDetail');
  const { event } = data;
  return <EventForm event={event} />;
}

export default EditEventPage;

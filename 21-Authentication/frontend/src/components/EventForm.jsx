/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2022-11-11 13:30:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-20 04:28:21
 * @FilePath: \workspace\React-The-Complete-Guide\21-Authentication\frontend\src\components\EventForm.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import {
  Form, useNavigate, useNavigation, useActionData, json, redirect,
} from 'react-router-dom';

import classes from './EventForm.module.css';
import { getAuthToken } from '../util/auth';

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">
          Title
          <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
        </label>
      </p>
      <p>
        <label htmlFor="image">
          Image
          <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} />
        </label>
      </p>
      <p>
        <label htmlFor="date">
          Date
          <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
        </label>
      </p>
      <p>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            rows="5"
            required
            defaultValue={event ? event.description : ''}
          />
        </label>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const { method } = request;
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  let url = 'http://localhost:8080/events';

  if (method === 'PATCH') {
    const { eventId } = params;
    url = `http://localhost:8080/events/${eventId}`;
  }

  const token = getAuthToken();
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 });
  }

  return redirect('/events');
}

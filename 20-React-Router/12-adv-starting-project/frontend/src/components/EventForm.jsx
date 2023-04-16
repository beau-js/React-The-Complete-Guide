/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-01-16 15:49:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-16 21:54:02
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\components\EventForm.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Form } from 'react-router-dom';
import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  function cancelHandler() {}

  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            name="title"
            required
            defaultValue={event ? event.title : ''}
          />
        </label>
      </p>
      <p>
        <label htmlFor="image">
          Image
          <input
            id="image"
            type="url"
            name="image"
            required
            defaultValue={event ? event.image : ''}
          />
        </label>
      </p>
      <p>
        <label htmlFor="date">
          Date
          <input
            id="date"
            type="date"
            name="date"
            required
            defaultValue={event ? event.date : ''}
          />
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
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

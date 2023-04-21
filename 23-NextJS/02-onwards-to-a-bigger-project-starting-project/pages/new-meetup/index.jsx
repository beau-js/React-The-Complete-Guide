/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-21 16:35:58
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-21 16:55:33
 * @FilePath: \workspace\React-The-Complete-Guide\23-NextJS\02-onwards-to-a-bigger-project-starting-project\pages\new-meetup\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

// our-domain.com/new-meetup

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

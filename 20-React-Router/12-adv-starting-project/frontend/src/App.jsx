/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-01-16 15:49:26
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-15 17:57:46
 * @FilePath: \React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\App.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./views/HomePage"
import EventDetailPage from "./views/EventDetailPage"
import EditEventPage from "./views/EditEventPage"
import NewEventPage from "./views/NewEventPage"
import RootLayout from "./views/RootLayout"
import EventsRootLayout from "./components/EventsRootLayout"
import EventsPage, { loader as eventsLoader } from "./views/Events"
import Error from "./views/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<Error></Error>,
    children: [
      { index:true, element: <HomePage></HomePage> },
      {
        path: "/events",
        element: <EventsRootLayout></EventsRootLayout>,
        // errorElement:<Error></Error>,

        children: [
          {
            index: true,
            element: <EventsPage></EventsPage>,
            loader: eventsLoader,
            // loader: async () => {
            //   const response = await fetch("http://localhost:8080/events")

            //   if (!response.ok) {
            //     //...
            //   } else {
            //     const resData = await response.json()
            //     return resData.events
            //   }
            // },
          },
          {
            path: ":eventId",
            element: <EventDetailPage></EventDetailPage>,
          },
          {
            path: "new",
            element: <NewEventPage></NewEventPage>,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage></EditEventPage>,
          },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App

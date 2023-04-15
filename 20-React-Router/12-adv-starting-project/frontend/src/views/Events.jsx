/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-14 14:27:45
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-15 21:24:33
 * @FilePath: \workspace\React-The-Complete-Guide\20-React-Router\12-adv-starting-project\frontend\src\views\Events.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." }
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {status: 500}
    )
  } else {
    // const resData = await response.json()
    // return resData.events
    return response;
  }
}

// import { useEffect, useState } from "react"

// import EventsList from "../components/EventsList"

// function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false)
//   const [fetchedEvents, setFetchedEvents] = useState()
//   const [error, setError] = useState()

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true)
//       const response = await fetch("http://localhost:8080/events")

//       if (!response.ok) {
//         setError("Fetching events failed.")
//       } else {
//         const resData = await response.json()
//         setFetchedEvents(resData.events)
//       }
//       setIsLoading(false)
//     }

//     fetchEvents()
//   }, [])
//   return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//     </>
//   )
// }

// export default EventsPage

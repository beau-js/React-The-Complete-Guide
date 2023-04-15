import React from "react"
import { Outlet } from "react-router-dom"
import EventsNavigation from "./EventsNavigation"

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <Outlet></Outlet>
    </>
  )
}

export default EventsRootLayout

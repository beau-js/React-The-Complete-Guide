import React from "react"
import MainNavigation from "../components/MainNavigation"
import { Outlet, useNavigation } from "react-router-dom"

const RootLayout = () => {
  const navigation = useNavigation()
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {navigation.state === "loading" && <p>loading...</p>}
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default RootLayout

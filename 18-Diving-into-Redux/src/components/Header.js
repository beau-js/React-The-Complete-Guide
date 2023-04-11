import { useDispatch, useSelector } from "react-redux"
import classes from "./Header.module.css"
import { authActions } from "../store/features/auth"
import { Fragment } from "react"

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  let loginDisplay = (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
    </header>
  )
  if (isAuthenticated) {
    loginDisplay = (
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  return <Fragment>{loginDisplay}</Fragment>
}

export default Header

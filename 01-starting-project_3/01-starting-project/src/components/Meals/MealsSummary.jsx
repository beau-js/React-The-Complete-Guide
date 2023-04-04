import React from "react"
import classes from "./MealsSummary.module.scss"

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner ata home.
      </p>
      <p>
        All our meals are cooked with highQuality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}

export default MealsSummary

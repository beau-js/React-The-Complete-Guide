/*
 * @Author: oneShot
 * @Date: 2022-03-30 14:22:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-03 16:51:35
 * @FilePath: \Workspace\01-starting-project_5\01-starting-project\src\components\MoviesList.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react"

import Movie from "./Movie"
import classes from "./MoviesList.module.css"

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  )
}

export default MovieList

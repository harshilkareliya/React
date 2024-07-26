import React from 'react'
import PopularMovie from './PopularMovie'
import UpcomingMovie from './Upcoming_Movie'
import TopRatedMovie from './TopRated_Movie'
import PopularMovie1 from './PopularMovie1'
import MoviesComponent from './MoviesComponent'

function Movie() {
  return (
    <div>
      {/* <PopularMovie/> <br /> */}
      {/* <PopularMovie1/> <br />
      <UpcomingMovie/> <br />
      <TopRatedMovie/> */}
      <MoviesComponent/>
    </div>
  )
}

export default Movie

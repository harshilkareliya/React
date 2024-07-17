import React from 'react'
import PopularMovie from './PopularMovie'
import UpcomingMovie from './Upcoming_Movie'
import TopRatedMovie from './TopRated_Movie'

function Movie() {
  return (
    <div>
      <PopularMovie/> <br />
      <UpcomingMovie/> <br />
      <TopRatedMovie/>
    </div>
  )
}

export default Movie

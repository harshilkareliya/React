import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, fetchUpcomingMovies, fetchTopRatedMovies, fetchNowPlayingMovies } from '../redux/action';

const MoviesComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchNowPlayingMovies());
  }, [dispatch]);

  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <h2>Upcoming Movies</h2>
      <ul>
        {upcomingMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <h2>Top Rated Movies</h2>
      <ul>
        {topRatedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <h2>Now Playing Movies</h2>
      <ul>
        {nowPlayingMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesComponent;

import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies, deleteMovie, setEditMovie }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} deleteMovie={deleteMovie} setEditMovie={setEditMovie} />
      ))}
    </div>
  );
}

export default MovieList;

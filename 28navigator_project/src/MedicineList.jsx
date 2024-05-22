import React from 'react';
import MovieItem from './Medicines';

function MedicineList({ movies, deleteMovie, setEditMovie }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} deleteMovie={deleteMovie} setEditMovie={setEditMovie} />
      ))}
    </div>
  );
}

export default MedicineList;

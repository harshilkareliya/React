import React from 'react';
import { useNavigate } from 'react-router-dom';


function MovieItem({ movie, deleteMovie, setEditMovie }) {
    const navigate = useNavigate()
    function setEditMoviethis(movie){
        setEditMovie(movie)
        navigate('/Movies')
    }
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{movie.Quntaty}</p>
      <button onClick={() => setEditMoviethis(movie)}>+</button>
      <button onClick={() => deleteMovie(movie.id)}>-</button>
    </div>
  );
}

export default MovieItem;

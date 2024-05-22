import React from 'react';
import { useNavigate } from 'react-router-dom';


function Medicine({ movie, deleteMovie, setEditMovie }) {
    const navigate = useNavigate()
    function setEditMoviethis(movie){
        setEditMovie(movie)
        navigate('/')
    }
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{movie.Quntaty}</p>
      <button onClick={() => setEditMoviethis(movie)}>Edit</button>
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </div>
  );
}

export default Medicine;

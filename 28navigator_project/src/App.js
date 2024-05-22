import React,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import MedicineList from './MedicineList';

function App() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);


  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) setMovies(storedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);

  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie)));
    setEditMovie(null);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home addMovie={addMovie} editMovie={editMovie} updateMovie={updateMovie} />}></Route>
          <Route path='/Movies' element={<MedicineList movies={movies} deleteMovie={deleteMovie} setEditMovie={setEditMovie} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

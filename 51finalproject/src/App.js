import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import TV from './Components/TV'
import Sport from './Components/Sport'
import Movie from './Components/Movie'
import Categories from './Components/Categories'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Search' element={<Search />}></Route>
          <Route path='/TV' element={<TV />}></Route>
          <Route path='/Sport' element={<Sport />}></Route>
          <Route path='/Movie' element={<Movie />}></Route>
          <Route path='/Categories' element={<Categories />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import AddPost from './AddPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addpost' element={<AddPost />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

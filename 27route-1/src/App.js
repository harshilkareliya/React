import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import AddPost from './AddPost';

function App() {

  const [posts, setposts] = useState([])

  function addPost(title, disc){
    const newPost = {
      id : Date().getTime,
      title : title,
      discription : disc
    }
    setposts([...posts, newPost])
  }

  function deletePost(id){
    setposts(posts.filter((e)=>(
      e.id != id
    )))
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home posts={posts} deletePost={deletePost}/>} ></Route>
          <Route path='/addpost' element={<AddPost addPost={addPost} />} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

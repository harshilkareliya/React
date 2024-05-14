import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [posts, setposts] = useState([])

  

  return (
    <div>
      <h1>Please, Add Post</h1>
      <Link to={"/addpost"}><a href='.'>Click here to add post</a></Link>
      
    </div>
  )
}

export default Home

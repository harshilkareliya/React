import React from 'react'
import { Link } from 'react-router-dom'

function Home({ posts, deletePost }) {

  function deletePostthis(id){
    deletePost(id)
  }

  return (
    <div>
      {
        posts.length === 0 ? 
        <>
          <h1>Please, Add Post</h1>
          <Link to={"/addpost"}><a href='.'>Click here to add post</a></Link>
        </> : 
          posts.map((e) => (
            <>
              <h1>{e.title}</h1>
              <p>{e.discription}</p>
              <button onClick={()=>deletePostthis(e.id)}>Delete</button>
              {/* <button>Edit</button> */}
            </>
          ))
      }

    </div>
  )
}

export default Home

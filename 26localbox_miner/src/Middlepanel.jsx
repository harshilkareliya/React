import React from 'react'
import { post } from './AllData'
import { CiMenuKebab } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";


function Middlepanel() {

  function addComment(id){
    // let comment = window.prompt("Enter Your comment")



  }

  return (
    <>
      <div className='mainMiddle'>
        <div className='middlePanel'>
          <div className="storySection">
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>
            <div className="story"><img src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg" alt="" /></div>

          </div>
          {

            // post && post.map((e) => (
              <center>
                <div className='post'>
                  <div className="postHeader">
                    <div className="postProfile"><img src={post[0].profileImg} alt="" /></div>
                    <h6 style={{ marginTop: '5px' }}>{post[0].userId} </h6> &nbsp;
                    <p style={{ marginTop: '12px', color: 'gray' }}>• 8h</p>
                  </div>
                  <div className="postImage">
                    <img src={post[0].postImage} alt="" />
                  </div>
                  <div className="viwerAddsec">
                    <div className="viwerAddsec1">
                      <span><FaRegHeart /></span><span onClick={addComment}><FaRegComment /></span><span><FaShareSquare /></span>
                    </div>
                    <div className="viwerAddsec2">
                      <h6>{post[0].like} like • {post[0].comment} Comments • {post[0].share} Share</h6>
                    </div>
                  </div>
                  <hr />
                </div>
              </center>
            // ))
          }

        </div>
        <div className="suggestion">
          <h6>Suggested for you</h6>
        </div>
      </div>
    </>
  )
}

export default Middlepanel



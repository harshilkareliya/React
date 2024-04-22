import React from 'react'
import { data1 } from './AllData'
import { CiMenuKebab } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";


function Middlepanel() {

  return (
    <div className='mainMiddle'>
      {
        data1.map((val) => {
          return (
            <div className='middlePanel' key={val.id}>
              <div className='mpHeader'>
                <img src={val.pImg} className='col-2'></img>
                <span><strong>{val.userName}</strong> <br></br>
                  {val.title}
                </span>
                <p className='menuIcon'><CiMenuKebab /></p>
              </div>
              <br></br>
              <p>{val.description}</p>
              <div className='mpMimgsec'>
                <img src={val.mImg} className='mpMimg'></img>
              </div>
              <div className='mpFooter'>
                <span><FaRegHeart /> {val.like}K</span>
                <span><FaRegComment /> {val.comment}K</span>
                <span><FaShareSquare /> {val.share}K</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Middlepanel



import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { PiFilmReel } from "react-icons/pi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { LuPlusSquare } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

function Leftpanel() {
  return (
    <div className='leftPanel'>
      <ul className='lpUl'>
      <h1 className='appName'>Mystagram</h1>
        <li><span><GoHomeFill/></span> &nbsp; Home</li>
        <li><span><IoSearch/></span> &nbsp;  Search</li>
        <li><span><MdOutlineExplore/></span> &nbsp; Explore</li>
        <li><span><PiFilmReel/></span> &nbsp; Reels</li>
        <li><span><BiMessageRoundedDots/></span> &nbsp; Messages</li>
        <li><span><FaRegHeart/></span> &nbsp; Notifications</li>
        <li><span><LuPlusSquare/></span> &nbsp; Create</li>
        <li><span></span> &nbsp; Profile</li>

      </ul>
      
    </div>
  )
}

export default Leftpanel

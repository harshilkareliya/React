import React from 'react'
import { useState } from 'react';
import  {FcSearch} from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";

function Header() {

  const[mode, setMode]=useState(true)
  
  function modeChange(){
    const body = document.body; 
  if (mode === true) {
    body.style.backgroundColor = "black";
    setMode(false);
    console.log(mode);
  } else {
    body.style.backgroundColor = "rgb(230, 229, 229)";
    setMode(true);
    console.log(mode);
  }
  }

  return (
    <div className='row d-flex justify-content-around header'>
        <div className='col-2 text-center '><strong>Mode&nbsp;&nbsp;&nbsp; 
            <span id='lightMode'><MdOutlineLightMode/></span>
            <span id='modeChanger' onClick={modeChange}><TbArrowsExchange/></span>
            <span id='darkMode'><MdDarkMode/></span>
            </strong></div>
        <div className='col-7 row d-flex justify-content-between'>
        <input className='col-10' placeholder="Search here...">

        </input>
        <div className='col-2'>
            <IoFilter/>&nbsp;&nbsp;&nbsp;<strong>Filters</strong>
        </div>
        </div>
        <div className='col-2'>
            Become a Seller
        </div>
    </div>
  )
}

export default Header

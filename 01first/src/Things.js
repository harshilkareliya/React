import React from 'react'
import img1 from './img/hero_right.png'

function Things() {
  return (
    <div className='things'>
        <div className='thingtext'>
            <p>APP LANDING PAGE</p><br></br>
            <h1>Get things done with Appco</h1><br></br>
            <p>Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua</p><br></br>
            <button>Download</button> 
            
            
            &nbsp;&nbsp;&nbsp;
            <i class="bi bi-play-circle-fill"></i>
        </div>
        <div className='thingpic'>
            <img src={img1}></img>
        </div>
      
    </div>
  )
}

export default Things

import React from 'react'
import dots from './img/dots.png'
function Help() {
  return (
    <div className='help'>
      <h1>How Can We HelpYour <br></br>with Appco!</h1><br></br><br></br><br></br><br></br>
      <div className='helpType'>
        <Box icon="bi bi-journal-check" msg="Easily Manage" />
        <Box icon="bi bi-journal-check" msg="Easily Manage"/>
        <Box icon="bi bi-journal-check" msg="Easily Manage"/>
      </div>
      
    </div>
  )
}

function Box(val){
  return(
    <div className='helpBox'> 
      <div className='iconBox'>
        <i className={val.icon}></i>
        <img src={dots} className='iconBg'></img>
        
      </div>
      <h2>{val.msg}</h2>
    </div>
  )
}

export default Help

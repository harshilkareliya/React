import React from 'react'

function Help() {
  return (
    <div className='help'>
      <h1>How Can We HelpYour <br></br>with Appco!</h1><br></br><br></br><br></br><br></br>
      <div className='helpType'>
        <Box icon="bi bi-journal-check" msg="Easily Manage"/>
        <Box icon="bi bi-journal-check" msg="Easily Manage"/>
        <Box icon="bi bi-journal-check" msg="Easily Manage"/>
      </div>
      
    </div>
  )
}

function Box(val){
  return(
    <div className='helpBox'> 
      
    </div>
  )
}

export default Help

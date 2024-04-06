import React from 'react'
import imgages from './logo.png'

function Navbar() {
  return (
    <div className='header'>
        <div className='logodiv'>
            <img src={imgages}></img>
        </div>
        <nav>
            <ul>
                <li><a href='' className='homeancer'>Home</a>
                    <a href=''>Feature</a>
                    <a href=''>Service</a>
                    <a href=''>Pricing</a>
                    <a href=''>Pages</a>
                    <a href=''>Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

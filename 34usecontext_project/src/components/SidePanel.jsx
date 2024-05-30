import React, { useState, useMemo } from 'react'
import './SidePanel.css'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-router-dom'

function SidePanel() {

    const [show, setshow] = useState(false)

    const position = useMemo(() => {
        return {
            width: show ? '18%' : '0',
            display: show ? 'block' : 'none',
        }
    })

    return (
        <div style={{ display: 'flex' }}>
            <div className='showside'>
                <span className='icon' onClick={() => setshow(!show)}>
                    <HiOutlineMenuAlt1 />
                </span>
            </div>
            <div className="toggleSide" style={{ width: position.width }}>
                <br />
                <div style={{ display: position.display }} id='box' >
                    <h1>HK's</h1><br />

                    <h2><Link to='/' className='h2'>Home</Link></h2>
                    <h2><Link to='/' className='h2'>Portfolio</Link></h2>
                    <h2><Link to='/about' className='h2'>About</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default SidePanel

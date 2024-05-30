import React,{useState, useMemo} from 'react'
import './SidePanel.css'
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function SidePanel() {

    const[show, setshow] = useState(false)

    const position = useMemo(()=>{
        return{
            width : show ? '18%' : '0'
        }
    })

    return (
        <div style={{ display: 'flex' }}>
            <div className='showside'>
                <span className='icon' onClick={()=>setshow(!show)}>
                    <HiOutlineMenuAlt1 />
                </span>
            </div>
            <div className="toggleSide" style={{width : position.width}}>

            </div>
        </div>
    )
}

export default SidePanel

import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { BiConversation } from "react-icons/bi";
import { IoWallet } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

function Leftpanel() {
  return (
    <div className='leftPanel'>
      <ul className='lpUl'>
        <li><FaHome/> &nbsp; Home</li>
        <li><IoNotificationsOutline/> &nbsp;  Notifications</li>
        <li><FaBagShopping/> &nbsp; Shop</li>
        <li><BiConversation/> &nbsp; Conversation</li>
        <li><IoWallet/> &nbsp; Wallet</li>
        <li><MdOutlineSubscriptions/> &nbsp; Subscription</li>
        <li><IoPersonCircleSharp/> &nbsp; My Profile</li>
        <br></br><br></br><br></br><br></br><br></br>
        <li><TbLogout2/> Log Out</li>
      </ul>
      
    </div>
  )
}

export default Leftpanel

import React from 'react'
import Menu from './Menu'
import { RiSearchLine } from "react-icons/ri";
import UserForm from './UserForm';
import { GoHeart } from "react-icons/go";
import CallUs from './CallUs';

function Header() {
  return (
    <div className='header'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        &nbsp;&nbsp;<Menu /> &nbsp;&nbsp;&nbsp;&nbsp;  <span style={{ fontSize: '21px', cursor: 'pointer' }}><RiSearchLine /> </span>&nbsp;&nbsp;  Search
      </div>
      <div>
        <h1>LOUIS VUITTON</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <CallUs />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ fontSize: '21px' }}><GoHeart /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UserForm />&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  )
}

export default Header

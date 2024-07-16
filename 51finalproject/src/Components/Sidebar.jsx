import React from 'react';
import './Sidebar.css';
import logo from './img/logo.png';
import { FaSearch, FaUser } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { MdOutlineMovie, MdOutlineSportsBasketball } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <center>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <button>Subscribe {'>'}</button>
        </div>
        <ul>
          <Link to='/Login'><li><FaUser /><span className="icon-name">User</span></li></Link>
          <Link to='/Search'><li><FaSearch /><span className="icon-name">Search</span></li></Link>
          <Link to='/'><li><GoHome /><span className="icon-name">Home</span></li></Link>
          <Link to='/TV'><li><PiTelevisionSimpleBold /><span className="icon-name">TV</span></li></Link>
          <Link to='/Movie'><li><MdOutlineMovie /><span className="icon-name">Movies</span></li></Link>
          <Link to='/Sport'><li><MdOutlineSportsBasketball /><span className="icon-name">Sports</span></li></Link>
          <Link to='/Categories'><li><BiCategory /><span className="icon-name">Categories</span></li></Link>
        </ul>
      </center>
    </div>
  );
}

export default Sidebar;

import React from 'react';
import './Header.css'
import Logo from '../assets/UnicusLogo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>
    
        <ul className='header-menu'>
            <li>Home</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>Why Unicus</li>
            <li>Contact Us</li>
        </ul>
        
        <a href=""> Register Now</a>
    </div>
  );
}

export default Header;
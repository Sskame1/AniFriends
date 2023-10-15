import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../img/Logo.svg"
import "../global.css"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <header>
        <img src={Logo} />
        <div className="menu"><FaBars size={40} color='white'/></div>
      </header>
    );
  };
  export default Header
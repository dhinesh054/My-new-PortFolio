import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#about" className="logo">Dhinesh B</a>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsActive(false)}>About Me</a>
          <a href="#skills" onClick={() => setIsActive(false)}>Skills</a>
          <a href="#work" onClick={() => setIsActive(false)}>Work</a>
          <a href="mailto:dhineshchandrab@gmail.com" className="email-link">Email</a>
        </div>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
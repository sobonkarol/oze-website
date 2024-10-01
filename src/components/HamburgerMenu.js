import React, { useState } from 'react';
import './HamburgerMenu.css'; // CSS file for styling

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Logo</h1> {/* Replace with your logo */}
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      <div className={`menu-overlay ${isOpen ? 'menu-open' : ''}`}>
        <ul className="menu-items">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#our-story" onClick={toggleMenu}>Our Story</a></li>
          <li><a href="#jobs" onClick={toggleMenu}>Jobs</a></li>
          <li><a href="#employers" onClick={toggleMenu}>Employers</a></li>
          <li><a href="#resources" onClick={toggleMenu}>Resources</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
        <button className="close-btn" onClick={toggleMenu}>X</button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
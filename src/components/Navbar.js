import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../resources/images/logo.png'; // Importuj logo
import './Navigation.css'; // Importuj dodatkowy plik CSS

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#333333', height: '120px' }} className="navbar-custom">
      <Navbar.Brand onClick={scrollToTop} className="navbar-brand-center" style={{ cursor: 'pointer', textAlign: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: '80px', width: 'auto' }} // Zwiększ rozmiar logo
        />
        <div className="think-oz-text">
          think oze
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about" style={{ color: '#E0E0E0' }}>O nas</Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link href="#services" style={{ color: '#E0E0E0' }}>Usługi</Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link href="#why-us" style={{ color: '#E0E0E0' }}>Dlaczego my</Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link href="#products" style={{ color: '#E0E0E0' }}>Produkty</Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link href="#contact" style={{ color: '#E0E0E0' }}>Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

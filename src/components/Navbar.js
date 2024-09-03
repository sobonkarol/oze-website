import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../resources/images/logo.png'; // Importuj logo

const Navigation = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#333333' }} className="navbar-custom">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="Logo"
          style={{ height: '40px', width: 'auto' }} // Możesz dostosować rozmiar logo według potrzeb
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
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
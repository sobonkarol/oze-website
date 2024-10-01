import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../resources/images/logo.png"; // Importuj logo
import "./Navigation.css"; // Importuj dodatkowy plik CSS

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      style={{ backgroundColor: "#333333", height: "120px" }}
      className="navbar-custom"
      fixed="top"
    >
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
        className="navbar-toggler-custom"
      >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>

      <Navbar.Brand
        onClick={scrollToTop}
        className="navbar-brand-center"
        style={{ cursor: "pointer", textAlign: "center" }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "80px", width: "auto" }} // Zwiększ rozmiar logo
        />
        <div className="think-oz-text">think oze</div>
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
        <Nav className="ml-auto">
          <Nav.Link href="#products" style={{ color: "#E0E0E0" }} onClick={() => setExpanded(false)}>
            Produkty
          </Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link href="#about" style={{ color: "#E0E0E0" }} onClick={() => setExpanded(false)}>
            O nas
          </Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link href="#services" style={{ color: "#E0E0E0" }} onClick={() => setExpanded(false)}>
            Usługi
          </Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link href="#why-us" style={{ color: "#E0E0E0" }} onClick={() => setExpanded(false)}>
            Dlaczego my
          </Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link href="#contact" style={{ color: "#E0E0E0" }} onClick={() => setExpanded(false)}>
            Kontakt
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
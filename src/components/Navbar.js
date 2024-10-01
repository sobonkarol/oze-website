import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../resources/images/logo.png"; // Importuj logo
import "./Navigation.css"; // Importuj dodatkowy plik CSS

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("products"); // Przechowuje aktywny link

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // Ustawia aktywny link po kliknięciu
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false);
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`navbar-custom ${expanded ? "menu-open" : ""}`}
      fixed="top"
    >
      <Navbar.Brand onClick={scrollToTop} className="navbar-brand-center">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="think-oz-text">think oze</div>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleToggle}
        className="navbar-toggler-custom"
      >
        <div className="toggler-icon">
          <div className="toggler-bar"></div>
          <div className="toggler-bar"></div>
          <div className="toggler-bar"></div>
        </div>
      </Navbar.Toggle>

      <div className={`full-screen-menu ${expanded ? "menu-visible" : ""}`}>
        <button className="close-btn" onClick={handleToggle}>
          ×
        </button>
        <Nav className="menu-items">
          <Nav.Link
            href="#products"
            className={`menu-link ${activeLink === "products" ? "active" : ""}`}
            onClick={() => handleLinkClick("products")}
          >
            Produkty
          </Nav.Link>
          <Nav.Link
            href="#about"
            className={`menu-link ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            O nas
          </Nav.Link>
          <Nav.Link
            href="#services"
            className={`menu-link ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleLinkClick("services")}
          >
            Usługi
          </Nav.Link>
          <Nav.Link
            href="#why-us"
            className={`menu-link ${activeLink === "why-us" ? "active" : ""}`}
            onClick={() => handleLinkClick("why-us")}
          >
            Dlaczego my
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className={`menu-link ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => handleLinkClick("contact")}
          >
            Kontakt
          </Nav.Link>
        </Nav>
      </div>

      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`navbar-collapse-custom ${expanded ? "collapse-hidden" : ""}`}
      >
        <Nav className="ml-auto">
          <Nav.Link
            href="#products"
            className={`nav-link-custom ${activeLink === "products" ? "active" : ""}`}
            onClick={() => handleLinkClick("products")}
          >
            Produkty
          </Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link
            href="#about"
            className={`nav-link-custom ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            O nas
          </Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link
            href="#services"
            className={`nav-link-custom ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleLinkClick("services")}
          >
            Usługi
          </Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link
            href="#why-us"
            className={`nav-link-custom ${activeLink === "why-us" ? "active" : ""}`}
            onClick={() => handleLinkClick("why-us")}
          >
            Dlaczego my
          </Nav.Link>
          <div className="nav-divider"></div>
          <Nav.Link
            href="#contact"
            className={`nav-link-custom ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => handleLinkClick("contact")}
          >
            Kontakt
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
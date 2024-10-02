import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaSpinner } from "react-icons/fa"; // Import ikony FaSpinner
import logo from "../resources/images/logo.png"; // Importuj logo
import "./Navigation.css"; // Import CSS

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("products");
  const [loading, setLoading] = useState(false); // Nowy stan dla animacji ładowania

  const scrollToTop = () => {
    setLoading(true); // Ustaw animację ładowania
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLoading(false); // Wyłącz ładowanie po zakończeniu
    }, 500); // Czas trwania efektu rozmycia i ładowania
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false);
  };

  return (
    <>
      {/* Nakładka rozmycia */}
      {loading && <div className="blur-overlay"></div>}

      {/* Nakładka ładowania */}
      {loading && (
        <div className="loading-overlay">
          <FaSpinner className="loading-icon" />
        </div>
      )}

      {/* Zawartość strony */}
      <div className="page-wrapper">
        <Navbar
          expanded={expanded}
          expand="lg"
          className={`navbar-custom ${expanded ? "menu-open" : ""}`}
          fixed="top"
        >
          {/* Logo */}
          <Navbar.Brand
            onClick={scrollToTop}
            className="navbar-brand-center clickable"
          >
            <img src={logo} alt="Logo" className="navbar-logo" />
            <div className="think-oz-text clickable" onClick={scrollToTop}>
              think oze
            </div>
          </Navbar.Brand>

          {/* Sekcja kontaktu */}
          <div className="navbar-contact-info">
            <a href="tel:+48694413377" className="navbar-contact-item">
              <FaPhoneAlt />
              +48 694 413 377
            </a>
            <span className="navbar-divider">|</span> {/* Dzielnik */}
            <a href="mailto:sobon@thinkoze.pl" className="navbar-contact-item">
              <FaEnvelope />
              sobon@thinkoze.pl
            </a>
          </div>

          {/* Menu nawigacyjne */}
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

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="navbar-collapse-custom"
          >
            <Nav className="ml-auto">
              <Nav.Link
                href="#products"
                className={`nav-link-custom ${
                  activeLink === "products" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("products")}
              >
                Fotowoltaika
              </Nav.Link>
              <div className="nav-divider"></div>
              <Nav.Link
                href="#dlaczegoMy"
                className={`nav-link-custom ${
                  activeLink === "services" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("services")}
              >
                Klimatyzacja
              </Nav.Link>
              <div className="nav-divider"></div>
              <Nav.Link
                href="#contact"
                className={`nav-link-custom ${
                  activeLink === "contact" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Kontakt
              </Nav.Link>
              <div className="nav-divider"></div>
              <Nav.Link
                href="#about"
                className={`nav-link-custom ${
                  activeLink === "about" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("about")}
              >
                O nas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
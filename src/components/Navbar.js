import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaSpinner } from "react-icons/fa";
import logo from "../resources/images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("services");
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    setLoading(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLoading(false);
    }, 500);
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
      {loading && <div className="blur-overlay"></div>}
      {loading && (
        <div className="loading-overlay">
          <FaSpinner className="loading-icon" />
        </div>
      )}

      <div className="page-wrapper">
        <Navbar
          expanded={expanded}
          expand="lg"
          className={`navbar-custom ${expanded ? "menu-open" : ""}`}
          fixed="top"
        >
          <Navbar.Brand onClick={scrollToTop} className="navbar-brand-center clickable">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <div className="think-oz-text clickable" onClick={scrollToTop}>
              think oze
            </div>
          </Navbar.Brand>

          <div className="navbar-contact-info">
            <a href="tel:+48694413377" className="navbar-contact-item">
              <FaPhoneAlt />
              +48 694 413 377
            </a>
            <span className="navbar-divider">|</span>
            <a href="mailto:sobon@thinkoze.pl" className="navbar-contact-item">
              <FaEnvelope />
              sobon@thinkoze.pl
            </a>
          </div>

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

          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
            <Nav className="ml-auto">
              <Nav.Link
                href="#dlaczegoMy"
                className={`nav-link-custom ${activeLink === "services" ? "active" : ""}`}
                onClick={() => handleLinkClick("services")}
              >
                Klimatyzacja
              </Nav.Link>
              <div className="nav-divider"></div>

              <Nav.Link
                href="#products"
                className={`nav-link-custom ${activeLink === "products" ? "active" : ""}`}
                onClick={() => handleLinkClick("products")}
              >
                Fotowoltaika
              </Nav.Link>
              <div className="nav-divider"></div>

              <Nav.Link
                href="#blog"
                className={`nav-link-custom ${activeLink === "blog" ? "active" : ""}`}
                onClick={() => handleLinkClick("blog")}
              >
                Blog
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
                href="#contact"
                className={`nav-link-custom ${activeLink === "contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("contact")}
              >
                Kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;

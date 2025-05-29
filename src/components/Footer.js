import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-between" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Col md="auto">
            <p className="mb-0">&copy; 2025 Think Oze. Wszelkie prawa zastrzeżone.</p>
          </Col>
          <Col md="auto">
            <a
              href="/polityka.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Polityka prywatności
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
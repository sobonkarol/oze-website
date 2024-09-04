import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Think Oze. Wszelkie prawa zastrzeżone.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
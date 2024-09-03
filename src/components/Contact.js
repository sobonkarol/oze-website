import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'; // Importuj plik CSS dla stylizacji

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center mb-5">Kontakt</h2>
        <Row className="justify-content-center">
          <Col md={5} className="contact-form">
            <h3 className="text-center mb-4">Wyślij nam wiadomość</h3>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Imię i nazwisko</Form.Label>
                <Form.Control type="text" placeholder="Wprowadź imię i nazwisko" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Wprowadź email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Wiadomość</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Wprowadź wiadomość" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Wyślij
              </Button>
            </Form>
          </Col>
          <Col md={5} className="contact-info">
            <h3 className="text-center mb-4">Nasze dane kontaktowe</h3>
            <p><strong>Adres:</strong> ul. Przykładowa 123, 00-000 Miasto</p>
            <p><strong>Telefon:</strong> +48 123 456 789</p>
            <p><strong>Email:</strong> kontakt@przyklad.pl</p>
            <p><strong>Godziny otwarcia:</strong> Pon-Pt 9:00 - 17:00</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
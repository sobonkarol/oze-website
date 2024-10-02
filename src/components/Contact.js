import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { ProductContext } from './ProductContext'; // Import kontekstu produktu
import './Contact.css'; // Import stylów kontaktu

const Contact = () => {
  const { selectedProduct } = useContext(ProductContext); // Pobierz wybrany produkt
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: selectedProduct ? `Zamówienie na: ${selectedProduct}` : '',
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');

  useEffect(() => {
    // Zaktualizuj wiadomość w formularzu po zmianie wybranego produktu
    if (selectedProduct) {
      setFormData((prevData) => ({
        ...prevData,
        message: `Zamówienie na: ${selectedProduct}`,
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setAlertMessage('Proszę wypełnić wszystkie pola.');
      setAlertVariant('danger');
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_pg59qm9', // Replace with your EmailJS service ID
      'template_imyy55r', // Replace with your EmailJS template ID
      formData,
      'HCR7mksjMVNpvqZA_' // Replace with your EmailJS user ID
    ).then((response) => {
      setAlertMessage('Wiadomość została wysłana!');
      setAlertVariant('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }).catch((error) => {
      setAlertMessage('Wystąpił błąd podczas wysyłania wiadomości.');
      setAlertVariant('danger');
    });
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center mb-5">Kontakt</h2>
        {alertMessage && (
          <Alert variant={alertVariant} className="text-center">
            {alertMessage}
          </Alert>
        )}
        <Row className="justify-content-center">
          {/* Kolumna z formularzem */}
          <Col md={6} className="contact-form">
            <h3 className="text-center mb-4 form-title">Wyślij nam wiadomość</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Imię i nazwisko:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Wprowadź imię i nazwisko"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Wprowadź email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Numer telefonu:</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Wprowadź numer telefonu"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Wiadomość:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Wprowadź wiadomość"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="text-center mt-4">
                <Button variant="primary" type="submit">
                  Wyślij
                </Button>
              </div>
            </Form>
          </Col>
          {/* Kolumna z mapą i danymi kontaktowymi */}
          <Col md={6} className="contact-info">
            <div className="map-container mb-4">
              {/* Mapa Google */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.0032907490845!2d20.92426331580246!3d52.15240217974652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471939887e7dc3c9%3A0x4fb4e1849eab31b5!2sPoniatowskiego%206%2C%2005-090%20Raszyn%2C%20Poland!5e0!3m2!1sen!2sus!4v1633940070290!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
            <div className="text-center">
              <p><strong>Adres:</strong> ul. Poniatowskiego 6, 05-090 Raszyn</p>
              <p><strong>Telefon:</strong> +48 694 413 377</p>
              <p><strong>Godziny otwarcia:</strong> Pon-Pt 8:00 - 16:00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
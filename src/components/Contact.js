import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled out
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setAlertMessage('Proszę wypełnić wszystkie pola.');
      setAlertVariant('danger');
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_c7wd60u', // Replace with your EmailJS service ID
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
          <Col md={5} className="contact-form">
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
          <Col md={5} className="contact-info">
            <div className="text-center"> {/* Center the contact info */}
              <p><strong>Adres:</strong> ul. Poniatowskiego 6 05-090 Raszyn</p>
              <p><strong>Telefon:</strong> +48 123 456 789</p>
              <p><strong>Email:</strong> kontakt@przyklad.pl</p>
              <p><strong>Godziny otwarcia:</strong> Pon-Pt 9:00 - 17:00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
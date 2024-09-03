import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSolarPanel, FaTools, FaShippingFast, FaHandsHelping, FaHeadset } from 'react-icons/fa';

const Services = () => (
  <section className="services-section">
    <Container>
      <h2 className="text-center mb-5">Nasze usługi</h2>
      <Row className="g-4">
        <Col md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-100 shadow-lg card-custom">
              <Card.Body>
                <FaSolarPanel size={48} color="#fff" />
                <Card.Title>Dystrybucja Sprzętu Fotowoltaicznego</Card.Title>
                <Card.Text>
                  Specjalizujemy się w dystrybucji wysokiej jakości sprzętu fotowoltaicznego, zapewniając naszym partnerom dostęp do najnowszych technologii i sprawdzonych rozwiązań.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-100 shadow-lg card-custom">
              <Card.Body>
                <FaHandsHelping size={48} color="#fff" style={{ marginBottom: '25px' }} />
                <Card.Title>Wsparcie Techniczne i Doradztwo</Card.Title>
                <Card.Text>
                  Oferujemy profesjonalne wsparcie techniczne oraz doradztwo na każdym etapie realizacji projektów, aby ułatwić pracę instalatorów i zapewnić optymalne rezultaty.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-100 shadow-lg card-custom">
              <Card.Body>
                <FaShippingFast size={48} color="#fff" style={{ marginBottom: '25px' }} />
                <Card.Title>Logistyka i Szybka Dostawa</Card.Title>
                <Card.Text>
                  Dbamy o terminowe dostawy sprzętu, oferując elastyczne rozwiązania logistyczne, które pozwalają na sprawną realizację projektów fotowoltaicznych.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-100 shadow-lg card-custom">
              <Card.Body>
                <FaTools size={48} color="#fff" style={{ marginBottom: '25px' }} />
                <Card.Title>Serwis i Utrzymanie</Card.Title>
                <Card.Text>
                  Zapewniamy kompleksowe wsparcie serwisowe dla naszych instalacji, aby zagwarantować ich długotrwałą efektywność i niezawodność.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-100 shadow-lg card-custom">
              <Card.Body>
                <FaHeadset size={48} color="#fff" style={{ marginBottom: '25px' }} />
                <Card.Title>Obsługa Klienta</Card.Title>
                <Card.Text>
                  Nasz zespół jest zawsze gotowy do pomocy, oferując wsparcie na każdym etapie współpracy, od pierwszego kontaktu po zakończenie instalacji.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Services;
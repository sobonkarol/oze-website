import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSolarPanel, FaWind, FaWater, FaChartLine, FaTools } from 'react-icons/fa';

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
                <FaSolarPanel size={48} color="#333" />
                <Card.Title>Instalacje fotowoltaiczne</Card.Title>
                <Card.Text>
                  Zapewniamy kompleksowe usługi montażu instalacji fotowoltaicznych dla domów i firm, pomagając naszym klientom w oszczędzaniu energii.
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
                <FaWind size={48} color="#333" />
                <Card.Title>Energia Wiatrowa</Card.Title>
                <Card.Text>
                  Instalujemy turbiny wiatrowe, które umożliwiają generowanie energii z wiatru, idealne dla dużych działek i obszarów wiejskich.
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
                <FaWater size={48} color="#333" />
                <Card.Title>Energia Wodna</Card.Title>
                <Card.Text>
                  Oferujemy rozwiązania z zakresu energii wodnej, w tym mikrohydroelektrownie, które pozwalają na efektywne wykorzystanie wody do produkcji energii.
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
                <FaChartLine size={48} color="#333" />
                <Card.Title>Audyt Energetyczny</Card.Title>
                <Card.Text>
                  Przeprowadzamy szczegółowe audyty energetyczne, aby ocenić efektywność energetyczną budynków i zaproponować optymalne rozwiązania.
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
                <FaTools size={48} color="#333" />
                <Card.Title>Systemy Zarządzania Energią</Card.Title>
                <Card.Text>
                  Oferujemy nowoczesne systemy zarządzania energią, które pozwalają na monitorowanie i optymalizację zużycia energii w budynkach.
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
                <FaTools size={48} color="#333" />
                <Card.Title>Serwis i Utrzymanie</Card.Title>
                <Card.Text>
                  Zapewniamy pełne wsparcie serwisowe i utrzymaniowe dla wszystkich naszych instalacji, aby zapewnić ich długotrwałą efektywność.
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
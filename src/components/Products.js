import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import product1 from '../resources/images/product1.png'; 
import product2 from '../resources/images/product2.png'; 
import product3 from '../resources/images/product3.png'; 
import product4 from '../resources/images/product4.png'; 
import product5 from '../resources/images/product5.png'; 
import product6 from '../resources/images/product6.png'; 

const products = [
  { id: 1, name: 'Panel fotowoltaiczny 350W', price: 1200, img: product1, description: 'Wydajny panel fotowoltaiczny do montażu na dachu.' },
  { id: 2, name: 'Inwerter solarny 5kW', price: 3000, img: product2, description: 'Nowoczesny inwerter do systemów solarnych.' },
  { id: 3, name: 'Magazyn energii 10kWh', price: 8000, img: product3, description: 'Wysokowydajny magazyn energii do przechowywania nadwyżek.' },
  { id: 4, name: 'Turbina wiatrowa 3kW', price: 10000, img: product4, description: 'Mała turbina wiatrowa do zasilania domów jednorodzinnych.' },
  { id: 5, name: 'Pompa ciepła 8kW', price: 15000, img: product5, description: 'Pompa ciepła do ogrzewania i chłodzenia budynków.' },
  { id: 6, name: 'Zestaw paneli solarnych 4kW', price: 20000, img: product6, description: 'Kompletny zestaw paneli solarnych do montażu na dachu.' },
];

const Products = () => (
  <section className="products-section">
    <Container className="my-5">
      <h2 className="text-center mb-5">Nasze produkty</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="h-100 shadow-sm card-custom">
              <Card.Img variant="top" src={product.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                <Button variant="primary" className="mt-auto">Dodaj do koszyka</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Products;
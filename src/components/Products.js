import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the server when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://thinkoze-admin.onrender.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once when component mounts

  return (
    <section className="products-section">
      <Container className="my-5">
        <h2 className="text-center mb-5">Nasze produkty</h2>
        <Row className="g-4">
          {products.map((product) => (
            <Col md={4} key={product._id}>
              <Card className="h-100 shadow-sm card-custom">
                <Card.Img variant="top" src={`https://thinkoze-admin.onrender.com${product.imageUrl}`} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                  <Card.Text><strong>Cena:</strong> {product.price} zł</Card.Text> {/* Wyświetlenie ceny */}
                  {/* Button for technical sheet (PDF) */}
                  <Button
                    variant="danger"
                    className="mb-2"
                    href={`https://thinkoze-admin.onrender.com${product.pdfUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Karta techniczna
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../resources/images/1.png';
import img2 from '../resources/images/2.png';
import img3 from '../resources/images/3.png';

const Header = () => {
  return (
    <Carousel fade controls={true} indicators={true}>
      <Carousel.Item>
        <img className="d-block w-100 header-image" src={img1} alt="First slide" />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Instalacje fotowoltaiczne</h3>
          <p>Nowoczesne rozwiązania dla Twojego domu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 header-image" src={img2} alt="Second slide" />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Energia wiatrowa</h3>
          <p>Czysta energia z naturalnych źródeł.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 header-image" src={img3} alt="Third slide" />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Energia wodna</h3>
          <p>Wykorzystanie mocy wody do produkcji energii.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
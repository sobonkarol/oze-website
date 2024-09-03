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
          <h3>Dystrybucja sprzętu fotowoltaicznego</h3>
          <p>Niezawodne rozwiązania dla profesjonalnych instalatorów.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 header-image" src={img2} alt="Second slide" />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Wsparcie techniczne i doradztwo</h3>
          <p>Pomagamy instalatorom na każdym etapie projektu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 header-image" src={img3} alt="Third slide" />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Szybka i niezawodna dostawa</h3>
          <p>Zadbamy o terminowe dostarczenie sprzętu na miejsce.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
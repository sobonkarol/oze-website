import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../resources/Agua-natural.mp4';

const Header = () => {
  return (
    <Carousel fade controls={true} indicators={true}>
      <Carousel.Item>
        <img className="d-block w-100 header-image" src={img1} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
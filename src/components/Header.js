import React from 'react';
import { Carousel } from 'react-bootstrap';
import video1 from '../resources/video1.mp4';
import './Header.css'; // Upewnij się, że ścieżka do pliku CSS jest poprawna


const Header = () => {
  return (
    <Carousel fade controls={true} indicators={true}>
      <Carousel.Item className='carousel-item'>
        <video className="d-block w-100 header-video" src={video1} autoPlay loop muted />
        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
          <div className="bg-overlay">
          <h1 className="display-1 text-uppercase text-with-border p-3">Think OZE</h1>
          <p className="lead p-2 slogan-test">Twoje wsparcie w kompletowaniu zestawów PV</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;

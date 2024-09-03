import React from 'react';
import Navigation from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import DlaczegoMy from './components/DlaczegoMy';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <section id="products">
        <Products />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="why-us">
        <DlaczegoMy />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
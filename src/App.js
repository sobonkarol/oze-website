import React from 'react';
import Navigation from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import DlaczegoMy from './components/DlaczegoMy';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ProductProvider } from './components/ProductContext'; // Import kontekstu produktu
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <ProductProvider>
      {/* Wszystkie komponenty mają dostęp do kontekstu produktu */}
      <Navigation />
      <Header />
      <section id="products">
        <Products />
      </section>
      <section id="dlaczegoMy">
        <DlaczegoMy />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="about">
        <About />
      </section>
      <Footer />
    </ProductProvider>
  );
}

export default App;
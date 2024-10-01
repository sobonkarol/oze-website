import React from 'react';
import Navigation from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
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
      <section id="why-us">
        <DlaczegoMy />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </ProductProvider>
  );
}

export default App;
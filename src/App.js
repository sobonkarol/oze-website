// App.js
import React from 'react';
import Navigation from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import DlaczegoMy from './components/DlaczegoMy';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import nowego komponentu
import { ProductProvider } from './components/ProductContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ProductProvider>
      <Navigation />
      <Header />
            <section id="dlaczegoMy">
        <DlaczegoMy />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="blog">
  <Blog />
</section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <ScrollToTopButton /> {/* Dodanie przycisku nawigacji do góry */}
    </ProductProvider>
  );
}

export default App;
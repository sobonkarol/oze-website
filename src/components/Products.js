import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductContext } from './ProductContext'; // Import kontekstu
import './Products.css'; // Import stylów

const Products = () => {
  const { setSelectedProduct } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  // Pobieranie produktów z serwera
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://thinkoze-admin.onrender.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania produktów:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="products-section">
      <div className="section-content">
        <h2 className="text-center mb-5">Nasze produkty</h2>
        <div className="card-container">
          {products.map((product) => (
            <div className="card" key={product._id}>
              {/* Cena na samej górze karty */}
              <p className="product-price"><strong>Cena:</strong> {product.price} zł + VAT</p>
              {/* Obraz produktu */}
              <img
                src={`https://thinkoze-admin.onrender.com${product.imageUrl}`}
                alt={product.name}
                className="card-img-top"
              />
              {/* Nazwa produktu */}
              <h3 className="card-title">{product.name}</h3>
              {/* Opis produktu */}
              <p className="card-text">{product.description}</p>
              {/* Przycisk "Kup teraz" */}
              <a
                href="#contact"
                className="btn btn-danger mb-2"
                onClick={() => setSelectedProduct(product.name)}
              >
                Kup teraz
              </a>
              {/* Hiperłącze "Karta techniczna" */}
              <a
                href={`https://thinkoze-admin.onrender.com${product.pdfUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link" // Dodanie klasy CSS dla stylizacji hiperłącza
              >
                Karta techniczna
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

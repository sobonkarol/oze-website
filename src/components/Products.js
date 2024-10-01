import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; // Import stylów dla produktów

const Products = () => {
  const [products, setProducts] = useState([]);

  // Pobieranie produktów z serwera
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
  }, []);

  return (
    <section className="products-section">
      <div className="section-content">
        <h2 className="text-center mb-5">Nasze produkty</h2>
        <div className="card-container">
          {products.map((product) => (
            <div className="card" key={product._id}>
              {/* Dodanie obrazu na górze karty */}
              <img
                src={`https://thinkoze-admin.onrender.com${product.imageUrl}`}
                alt={product.name}
                className="card-img-top"
              />
              <div></div>
              <p><strong>Cena:</strong> {product.price} zł + VAT</p>
              <h3>{product.name}</h3>
              <a
                href={`https://thinkoze-admin.onrender.com${product.pdfUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
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

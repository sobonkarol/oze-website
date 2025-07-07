import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "./ProductContext";
import "./Products.css";

const Products = () => {
  const { setSelectedProduct } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://thinkoze-admin.onrender.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania produktów:", error);
      }
    };

    fetchProducts();
  }, []);

  const formatProductName = (name) => {
    const parts = name.match(/([^(]+)(\(.+\))?/);
    return parts ? { mainName: parts[1], subName: parts[2] } : { mainName: name, subName: "" };
  };

  return (
    <section className="products-section" id="products-section">
      <div className="section-content">
        <h2 className="text-center mb-5" style={{ color: "black" }}>Fotowoltaika</h2>
        <div className="card-container">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <p className="product-price">
                <strong>Cena:</strong>{" "}
                {product.discountPrice && product.basePrice && product.discountPrice !== product.basePrice ? (
                  <>
                    <span className="old-price">{product.basePrice} zł</span>
                    <br />
                    <span className="discount-price">{product.discountPrice} zł + VAT</span>
                  </>
                ) : (
                  <>{product.price || product.discountPrice || product.basePrice} zł + VAT</>
                )}
              </p>
              <img
                src={`https://thinkoze-admin.onrender.com${product.imageUrl}`}
                alt={product.name}
                className="card-img-top"
              />
              <h3 className="card-title">
                {formatProductName(product.name).mainName}
                <br />
                <span className="product-subtitle">{formatProductName(product.name).subName}</span>
              </h3>
              <p className="card-text">{product.description}</p>
              <a
                href="#contact"
                className="btn btn-danger mb-2"
                onClick={() => setSelectedProduct(product.name)}
              >
                Kup teraz
              </a>
              <a
                href={`https://thinkoze-admin.onrender.com${product.pdfUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link"
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

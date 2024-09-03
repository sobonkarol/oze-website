import React from 'react';
import { FaStar, FaShieldAlt, FaLeaf } from 'react-icons/fa';

const DlaczegoMy = () => (
  <section className="why-us-section">
    <div className="section-content">
      <h2 className="text-center mb-5">Dlaczego my?</h2>
      <div className="card-container">
        <div className="card">
          <div className="card-icon">
            <FaStar size={48} color="#e0e0e0" />
          </div>
          <h3>Eksperci w branży</h3>
          <p>Nasza firma to zespół doświadczonych specjalistów z pasją do odnawialnych źródeł energii.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaShieldAlt size={48} color="#e0e0e0" />
          </div>
          <h3>Najwyższa jakość</h3>
          <p>Współpracujemy tylko z najlepszymi producentami, dostarczając produkty i rozwiązania najwyższej jakości.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaLeaf size={48} color="#e0e0e0" />
          </div>
          <h3>Zrównoważony rozwój</h3>
          <p>Stawiamy na ekologiczne rozwiązania, które pomagają naszym klientom zmniejszyć ślad węglowy.</p>
        </div>
      </div>
    </div>
  </section>
);

export default DlaczegoMy;
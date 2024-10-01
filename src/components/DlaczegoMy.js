import React from 'react';
import { FaStar, FaHandsHelping, FaTruck } from 'react-icons/fa';

const DlaczegoMy = () => (
  <section className="why-us-section">
    <div className="section-content">
      <h2 className="text-center mb-5">Klimatyzacja</h2>
      <div className="card-container">
        <div className="card">
          <div className="card-icon">
            <FaStar size={48} color="#e0e0e0" />
          </div>
          <h3>Doświadczenie i Ekspertyza</h3>
          <p>Jesteśmy zespołem doświadczonych specjalistów, którzy od lat współpracują z instalatorami fotowoltaiki, oferując wsparcie i produkty najwyższej jakości.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaHandsHelping size={48} color="#e0e0e0" />
          </div>
          <h3>Wsparcie na Każdym Kroku</h3>
          <p>Zapewniamy kompleksowe doradztwo techniczne oraz elastyczne rozwiązania logistyczne, które ułatwiają realizację projektów od początku do końca.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaTruck size={48} color="#e0e0e0" />
          </div>
          <h3>Szybka i Niezawodna Dostawa</h3>
          <p>Dzięki sprawnemu systemowi logistycznemu, nasze produkty docierają na miejsce szybko i bezpiecznie, zawsze na czas.</p>
        </div>
      </div>
    </div>
  </section>
);

export default DlaczegoMy;
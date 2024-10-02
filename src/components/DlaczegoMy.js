import React from 'react';
import { FaBolt, FaCheckCircle, FaTools, FaHandsHelping } from 'react-icons/fa';

const DlaczegoMy = () => (
  <section className="why-us-section">
    <div className="section-content">
      <h2 className="text-center mb-5">Klimatyzacja</h2>
      <div className="card-container">
        
        <div className="card">
          <div className="card-icon">
            <FaBolt size={48} color="#0C708A" />
          </div>
          <h3>Nowoczesne Technologie</h3>
          <p>Nasze klimatyzatory to połączenie innowacyjnych rozwiązań z energooszczędnością, aby zapewnić optymalne warunki w Twoim domu przez cały rok.</p>
        </div>
        
        <div className="card">
          <div className="card-icon">
            <FaCheckCircle size={48} color="#0C708A" />
          </div>
          <h3>Bezkompromisowa Jakość</h3>
          <p>Współpracujemy wyłącznie z renomowanymi markami, które gwarantują długotrwałe i bezawaryjne działanie. Nasze produkty zapewnią Ci spokój i komfort użytkowania na lata.</p>
        </div>
        
        <div className="card">
          <div className="card-icon">
            <FaHandsHelping size={48} color="#0C708A" />
          </div>
          <h3>Kompleksowa Obsługa</h3>
          <p>Doradzimy, pomożemy w doborze najlepszego rozwiązania i profesjonalnie zamontujemy klimatyzator w Twoim domu lub biurze, dbając o każdy detal.</p>
        </div>
        
        <div className="card">
          <div className="card-icon">
            <FaTools size={48} color="#0C708A" />
          </div>
          <h3>Serwis i Wsparcie</h3>
          <p>Oferujemy pełen serwis oraz stałe wsparcie techniczne, abyś mógł cieszyć się komfortem przez cały rok. Jesteśmy do Twojej dyspozycji w każdej chwili.</p>
        </div>
      </div>
      <div className="call-to-action text-center mt-5">
        <p>Nie czekaj, skontaktuj się z nami już dziś i przekonaj się, jak wiele może zmienić nowoczesna klimatyzacja!</p>
      </div>
    </div>
  </section>
);

export default DlaczegoMy;

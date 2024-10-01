import React from 'react';
import { FaSolarPanel, FaTools, FaShippingFast, FaHandsHelping, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => (
  <section className="services-section">
    <div className="section-content">
      <h2 className="text-center mb-5">Nasze usługi</h2>
      <div className="card-container">
        <div className="card">
          <div className="card-icon">
            <FaSolarPanel size={48} color="#e0e0e0" />
          </div>
          <h3>Dystrybucja Sprzętu Fotowoltaicznego</h3>
          <p>Specjalizujemy się w dystrybucji wysokiej jakości sprzętu fotowoltaicznego, zapewniając naszym partnerom dostęp do najnowszych technologii i sprawdzonych rozwiązań.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaHandsHelping size={48} color="#e0e0e0" />
          </div>
          <h3>Wsparcie Techniczne i Doradztwo</h3>
          <p>Oferujemy profesjonalne wsparcie techniczne oraz doradztwo na każdym etapie realizacji projektów, aby ułatwić pracę instalatorów i zapewnić optymalne rezultaty.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaShippingFast size={48} color="#e0e0e0" />
          </div>
          <h3>Logistyka i Szybka Dostawa</h3>
          <p>Dbamy o terminowe dostawy sprzętu, oferując elastyczne rozwiązania logistyczne, które pozwalają na sprawną realizację projektów fotowoltaicznych.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaTools size={48} color="#e0e0e0" />
          </div>
          <h3>Serwis i Utrzymanie</h3>
          <p>Zapewniamy kompleksowe wsparcie serwisowe dla naszych instalacji, aby zagwarantować ich długotrwałą efektywność i niezawodność.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaHeadset size={48} color="#e0e0e0" />
          </div>
          <h3>Obsługa Klienta</h3>
          <p>Nasz zespół jest zawsze gotowy do pomocy, oferując wsparcie na każdym etapie współpracy, od pierwszego kontaktu po zakończenie instalacji.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
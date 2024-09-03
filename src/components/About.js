import React from 'react';
import './About.css'; // Dodaj plik CSS dla stylizacji

const About = () => (
  <section className="about-section">
    <div className="about-content">
      <h2 className="section-title">O nas</h2>
      <div className="about-details">
        <div className="about-text">
          <p>
          Jako wiodący dystrybutor sprzętu fotowoltaicznego, nasza firma specjalizuje się we współpracy z instalatorami, zapewniając im nie tylko wysokiej jakości produkty, ale także wsparcie na każdym etapie realizacji projektu. Rozumiemy, że sukces instalatorów zależy od niezawodnych dostaw, dlatego dbamy o to, by nasza oferta obejmowała tylko sprawdzone rozwiązania od renomowanych producentów. Nasza szeroka gama produktów, obejmująca panele słoneczne, inwertery, systemy montażowe i akcesoria, została starannie dobrana, by spełniać najwyższe standardy jakości i efektywności.
          </p>
          <p>
          Ale nasza rola nie kończy się na dostarczeniu sprzętu. Współpracując z nami, instalatorzy zyskują dostęp do profesjonalnego doradztwa technicznego, wsparcia logistycznego oraz elastycznych rozwiązań finansowych, które ułatwiają realizację nawet najbardziej wymagających projektów. Nasza misja to nie tylko dostarczanie produktów, ale także budowanie długotrwałych relacji opartych na zaufaniu, wsparciu i wspólnym dążeniu do sukcesu.
          </p>
          <p>
          Zapraszamy do współpracy – razem sprawimy, że praca nad instalacjami fotowoltaicznymi będzie prostsza, szybsza i bardziej efektywna!
          </p>
          <a href="/contact" className="btn-primary">Dowiedz się więcej</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;

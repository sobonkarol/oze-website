import React from 'react';
import './About.css'; // Import pliku CSS dla stylizacji
import czlowiek1 from '../resources/images/czlowiek1.png'; // Import pierwszego zdjęcia
import czlowiek2 from '../resources/images/czlowiek1.png'; // Import drugiego zdjęcia

const About = () => (
  <section className="about-section">
    <div className="about-content">
      <h2 className="section-title">Nasz zespół</h2>
      
      {/* Sekcja zdjęć i danych pracowników */}
      <div className="about-team">
        <div className="team-member">
          {/* Zastąpienie ikony zdjęciem */}
          <img src={czlowiek1} alt="Patryk Soboń" className="team-photo" />
          <h3>Patryk Soboń</h3>
          <p><b>Specjalność</b></p>
          <p>+48 694 413 377</p>
          <p>sobon@thinkoze.pl</p>
        </div>
        <div className="team-member">
          {/* Zastąpienie ikony zdjęciem */}
          <img src={czlowiek2} alt="Patryk Kubiak" className="team-photo" />
          <h3>Patryk Kubiak</h3>
          <p><b>Specjalność</b></p>
          <p>+48 691 664 696</p>
          <p>kubiak@thinkoze.pl</p>
        </div>
      </div>

      {/* Sekcja opisu o firmie */}
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
        </div>
      </div>
    </div>
  </section>
);

export default About;
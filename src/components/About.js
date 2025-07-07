import React from 'react';
import './About.css';
import czlowiek1 from '../resources/images/czlowiek1.png';
import czlowiek2 from '../resources/images/czlowiek1.png';

const About = () => (
  <section className="about-section">
    <div className="about-content">
      <h2 className="section-title">Nasz zespół</h2>

      <div className="about-team">
        <div className="team-member">
          <img src={czlowiek1} alt="Patryk Soboń" className="team-photo" />
          <h3>Patryk Soboń</h3>
          <p><b>Specjalista ds. klimatyzacji</b></p>
          <p>+48 694 413 377</p>
          <p>sobon@thinkoze.pl</p>
        </div>
        <div className="team-member">
          <img src={czlowiek2} alt="Patryk Kubiak" className="team-photo" />
          <h3>Patryk Kubiak</h3>
          <p><b>Doradca techniczny</b></p>
          <p>+48 691 664 696</p>
          <p>kubiak@thinkoze.pl</p>
        </div>
      </div>

      <div className="about-details">
        <div className="about-text">
          <p>
            Specjalizujemy się w dostarczaniu i instalacji nowoczesnych systemów klimatyzacji dla klientów indywidualnych i firm. Nasza oferta obejmuje szeroki wybór urządzeń od renomowanych producentów – od prostych rozwiązań do mieszkań, po zaawansowane systemy dla dużych obiektów komercyjnych.
          </p>
          <p>
            Wspieramy naszych klientów na każdym etapie realizacji – od doboru odpowiedniego sprzętu, przez profesjonalne doradztwo techniczne, aż po montaż i serwis. Naszym priorytetem jest komfort użytkownika, efektywność energetyczna oraz niezawodność instalowanych urządzeń.
          </p>
          <p>
            Dzięki doświadczeniu naszego zespołu jesteśmy w stanie zaproponować rozwiązania dopasowane do indywidualnych potrzeb i budżetu. Zapraszamy do kontaktu – razem zadbamy o komfort termiczny Twojego domu lub firmy przez cały rok.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
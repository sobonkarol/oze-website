import React from 'react';
import './About.css'; // Dodaj plik CSS dla stylizacji

const About = () => (
  <section className="about-section">
    <div className="about-content">
      <h2 className="section-title">O nas</h2>
      <div className="about-details">
        <div className="about-text">
          <p>
            Nasza firma od lat dostarcza innowacyjne rozwiązania z zakresu odnawialnych źródeł energii. 
            Dzięki zespołowi ekspertów oraz najnowszym technologiom, pomagamy klientom w zrównoważonym rozwoju, 
            oferując najwyższej jakości produkty i usługi.
          </p>
          <p>
            Nasze rozwiązania obejmują instalacje fotowoltaiczne, energia wiatrowa oraz energia wodna, które są 
            dostosowane do indywidualnych potrzeb każdego klienta. Nasze priorytety to niezawodność, efektywność 
            oraz ochrona środowiska. Wierzymy, że inwestowanie w odnawialne źródła energii jest kluczowe dla 
            przyszłości naszej planety.
          </p>
          <a href="/contact" className="btn-primary">Dowiedz się więcej</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;

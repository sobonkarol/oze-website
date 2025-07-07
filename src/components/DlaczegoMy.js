import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import './DlaczegoMy.css';

const DlaczegoMy = () => {
  const { setSelectedProduct } = useContext(ProductContext);

  const handleWycenaClick = () => {
    setSelectedProduct('Wycena klimatyzacji');
    window.location.hash = '#contact';
  };

  return (
    <section className="why-us-section">
      <div className="white-divider" />

      <div className="container">
        <h2 className="text-center mb-5">Dlaczego klimatyzacja i dlaczego my?</h2>

        <div className="highlight-block mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/images/klimatyzacja-salon.jpg" alt="Klimatyzacja w salonie" className="why-image" />
            </div>
            <div className="col-md-6">
              <h3>Komfort przez cały rok</h3>
              <p>
                Klimatyzacja to inwestycja, która znacząco poprawia komfort życia. Nowoczesne urządzenia nie tylko skutecznie chłodzą latem, ale także umożliwiają efektywne ogrzewanie zimą. Dzięki temu możesz cieszyć się przyjemną temperaturą w domu przez cały rok – bez względu na warunki pogodowe za oknem.
              </p>
              <p>
                Urządzenia klimatyzacyjne wyposażone są w inteligentne systemy zarządzania, które pozwalają ustawiać harmonogramy pracy, sterować temperaturą zdalnie przez aplikację, a nawet dostosowywać pracę urządzenia do Twojego trybu życia.
              </p>
              <p>
                Co więcej, nowoczesna klimatyzacja dba również o jakość powietrza. Wbudowane filtry usuwają pyłki, roztocza, kurz i bakterie – idealne rozwiązanie dla alergików i rodzin z dziećmi.
              </p>
              <p>
                Dzięki niskiemu zużyciu energii i wysokiej wydajności, klimatyzacja to komfort, zdrowie i oszczędność w jednym.
              </p>
            </div>
          </div>
        </div>

        <div className="highlight-block mb-5">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img src="/images/montaz-zespol.jpg" alt="Zespół montażowy" className="why-image" />
            </div>
            <div className="col-md-6">
              <h3>Doświadczenie i precyzja</h3>
              <p>
                Od lat zajmujemy się projektowaniem i montażem systemów klimatyzacyjnych. Setki realizacji w domach, biurach, sklepach i lokalach usługowych to dowód zaufania klientów.
              </p>
              <p>
                Nasz zespół to wykwalifikowani monterzy z certyfikatami F-gazowymi. Montaż przebiega sprawnie, czysto i zgodnie ze sztuką. Dbamy o estetykę i bezpieczeństwo instalacji.
              </p>
              <p>
                Oferujemy bezpłatne doradztwo i pomoc w doborze odpowiedniego rozwiązania dopasowanego do Twoich potrzeb i budżetu.
              </p>
            </div>
          </div>
        </div>

        <div className="highlight-block mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/images/klimatyzator-zblizenie.jpg" alt="Nowoczesny klimatyzator" className="why-image" />
            </div>
            <div className="col-md-6">
              <h3>Najlepsze technologie</h3>
              <p>
                Współpracujemy z renomowanymi markami jak Daikin, LG, Gree, Mitsubishi. Oferujemy urządzenia split, multisplit, kanałowe oraz kasetonowe – zawsze dopasowane do wnętrza.
              </p>
              <p>
                Nasze klimatyzacje są energooszczędne, ciche, trwałe i wyposażone w nowoczesne funkcje: Wi-Fi, harmonogramy, czujniki ruchu czy tryby oszczędzania energii.
              </p>
              <p>
                Gwarantujemy, że każde urządzenie, które montujemy, to sprzęt wysokiej klasy – objęty gwarancją i serwisem.
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-section text-center">
          <p className="lead mb-3">Zainwestuj w jakość, funkcjonalność i profesjonalny montaż. Zaufaj specjalistom od klimatyzacji.</p>
          <button className="custom-button" onClick={handleWycenaClick}>
            Zamów wycenę
          </button>
        </div>
      </div>
    </section>
  );
};

export default DlaczegoMy;
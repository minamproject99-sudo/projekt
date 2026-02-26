import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import './KlasicnaMasaza.css';

const KlasicnaMasaza = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuliramo loading ekran kako bismo prikazali tvoj Loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav />
      {loading && <Loader />}

      {!loading && (
        <main className="happy-main dark-theme">

          {/* 1. HERO SEKCIJA */}
          <section className="hero-h" style={{ backgroundImage: `url('/img/klasicna-hero.png')` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <h1 className="naslov-1">Klasična masaža: Provjereni put do opuštenosti i vitalnosti</h1>
              <p className="podnaslov">U današnjem brzom tempu života, klasična masaža ostaje zlatni standard za duboko opuštanje i obnavljanje tijela. Kroz pažljive pokrete i tehnike, ova masaža ne samo da opušta napete mišiće, već i umiruje um, vraćajući te u stanje potpune ravnoteže i mira.</p>
            </div>
          </section>

          {/* 2. Z-LAYOUT SEKCIJE */}
          <section className="services py-5">
            <div className="container">

              {/* Blok 1 - Što je klasična masaža? */}
              <div className="service-row">
                <div className="service-img-wrapper">
                  <img src="/img/klasicna-1.png" alt="Klasična masaža tehnika" />
                </div>
                <div className="service-text">
                  <h2>Što je klasična masaža?</h2>
                  <p>Klasična masaža je temeljna i najpopularnija tehnika masaže koja koristi različite pritiske – od nježnih do čvršćih – kako bi se tretiralo cijelo tijelo ili specifični dijelovi.</p>
                  <p>Fokus je na manipulaciji mekih tkiva, čime se poboljšava cirkulacija, smanjuje napetost mišića i potiče opće dobrostanje.</p>
                </div>
              </div>

              {/* Blok 2 - Prednosti klasične masaže */}
              <div className="service-row reverse">
                <div className="service-img-wrapper">
                  <img src="/img/klasicna-2.png" alt="Klasična masaža opuštanje" />
                </div>
                <div className="service-text">
                  <h2>Prednosti klasične masaže</h2>
                  <ul className="premium-list">
                    <li><strong>Duboko opuštanje:</strong> Oslobodi se stresa i napetosti nakupljene u svakodnevnom životu.</li>
                    <li><strong>Ublažavanje bolova:</strong> Pomaže kod kroničnih bolova u leđima, vratu i ramenima.</li>
                    <li><strong>Poboljšana cirkulacija:</strong> Potiče protok krvi i limfe, što doprinosi detoksikaciji tijela.</li>
                    <li><strong>Smanjenje mišićne napetosti:</strong> Osjećaš se lakše i pokretnije.</li>
                    <li><strong>Poboljšano raspoloženje:</strong> Masaža je prirodan način za smanjenje anksioznosti i poboljšanje sna.</li>
                  </ul>
                </div>
              </div>

              {/* Blok 3 - Za koga je? */}
              <div className="service-row">
                <div className="service-img-wrapper">
                  <img src="/img/klasicna-3.png" alt="Klasična masaža rezultati" />
                </div>
                <div className="service-text">
                  <h2>Za koga je klasična masaža?</h2>
                  <p>Idealna je za svakoga tko traži predah od stresa, želi ublažiti mišićnu napetost ili jednostavno želi pružiti svom tijelu zasluženu njegu.</p>
                  <p>Bez obzira na godine i stil života, klasična masaža nudi benefite za svakoga.</p>
                </div>
              </div>

            </div>
          </section>

          {/* 3. KONTAKT GUMB
          <div className="premium-contact-section text-center">
            <h3 className="contact-heading">Zaslužuješ trenutak za sebe.</h3>
            <a
              href="https://wa.me/385976065629?text=Pozdrav!%20Želim%20rezervirati%20termin%20za%20klasičnu%20masažu."
              className="btn-premium-gold"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i> REZERVIRAJ TERMIN
            </a>
          </div> */}

          {/* 4. STICKY WHATSAPP */}
          <a
            href="https://wa.me/385976065629?text=Zanima%20me%20klasična%20masaža."
            className="whatsapp-float"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

        </main>
      )}
    </>
  );
};

export default KlasicnaMasaza;

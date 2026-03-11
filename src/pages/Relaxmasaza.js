import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import './SportskaMasaza.css'; // Možemo koristiti isti CSS da zadržimo identičan luksuzni izgled!

const RelaxMasaza = () => {
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
          <section className="hero-h" style={{ backgroundImage: `url('/img/relax-hero.png')` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <h1 className="naslov-1">Relax masaža: Prepusti se potpunom smirenju duha i tijela</h1>
              <p className="podnaslov">Užurbani ritam modernog života često nas ostavlja iscrpljenima i pod stresom. Relax masaža je tvoja oaza mira, stvorena da te nježnim dodirima i ugodnim mirisima odvede u stanje duboke opuštenosti. Dopusti si bijeg od svakodnevice i ponovno pronađi unutarnji mir.</p>
            </div>
          </section>

          {/* 2. Z-LAYOUT SEKCIJE */}
          <section className="services py-5">
            <div className="container">

              {/* Blok 1 - Što je Relax masaža? */}
              <div className="service-row">
                <div className="service-img-wrapper">
                  <img src="/img/relax-3.png" alt="Opuštajuća relax masaža" />
                </div>
                <div className="service-text">
                  <h2>Što je Relax masaža?</h2>
                  <p>Relax masaža je nježan i fluidan tretman usmjeren na smanjenje mentalnog i fizičkog stresa. Kroz duge, spore i ritmičke pokrete, uz korištenje toplih ulja i aromaterapije, opušta se svaki mišić, smiruje živčani sustav i potiče osjećaj potpunog blagostanja.</p>
                  <p>Ova masaža nema za cilj rješavanje dubokih mišićnih čvorova, već pružanje maksimalne relaksacije i harmonizacije.</p>
                </div>
              </div>

              {/* Blok 2 - Prednosti */}
              <div className="service-row reverse">
                <div className="service-img-wrapper">
                  <img src="/img/relax-1.png" alt="Prednosti relax masaže" />
                </div>
                <div className="service-text">
                  <h2>Prednosti Relax masaže</h2>
                  <ul className="premium-list">
                    <li><strong>Dubinsko opuštanje:</strong> Oslobodi se napetosti i stresa nakupljenog u tijelu i umu.</li>
                    <li><strong>Smanjenje anksioznosti:</strong> Umirujući dodir i atmosfera pomažu u smanjenju osjećaja tjeskobe.</li>
                    <li><strong>Poboljšan san:</strong> Duboka opuštenost doprinosi lakšem usnivanju i kvalitetnijem snu.</li>
                    <li><strong>Oslobađanje endorfina:</strong> Potiče lučenje hormona sreće, poboljšavajući raspoloženje.</li>
                    <li><strong>Harmonizacija tijela i duha:</strong> Pomaže u ponovnom povezivanju sa sobom i pronalaženju unutarnjeg mira.</li>
                  </ul>
                </div>
              </div>

              {/* Blok 3 - Za koga je namijenjena? */}
              <div className="service-row">
                <div className="service-img-wrapper">
                  <img src="/img/relax-4.png" alt="Tretman za smanjenje stresa" />
                </div>
                <div className="service-text">
                  <h2>Za koga je Relax masaža?</h2>
                  <p>Relax masaža je idealna za svakoga tko traži bijeg od stresa, želi poboljšati kvalitetu sna, smanjiti tjeskobu ili jednostavno sebi pokloniti trenutke čistog uživanja i dubokog opuštanja.</p>
                  
                  <blockquote className="premium-quote">
                    "Najbolji dar koji možeš pokloniti sebi i drugima je tvoj vlastiti unutarnji mir."
                  </blockquote>
                </div>
              </div>

            </div>
          </section>


           {/* 3. KONTAKT GUMB
          <div className="premium-contact-section text-center">
            <h3 className="contact-heading">Rezerviraj termin za svoju dozu mira.</h3>
            <a
              href="https://wa.me/385976065629?text=Pozdrav!%20Želim%20rezervirati%20termin%20za%20klasičnu%20masažu."
              className="btn-premium-gold"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i> REZERVIRAJ TERMIN
            </a>
          </div>  */}

          {/* 4. STICKY WHATSAPP */}
          <a
            href="https://wa.me/385976065629?text=Zanima%20me%20Relax%20masaža."
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

export default RelaxMasaza;

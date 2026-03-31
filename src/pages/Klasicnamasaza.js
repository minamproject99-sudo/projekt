import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import "./SportskaMasaza.css"; // Zadržavamo isti CSS za luksuzni izgled

const KlasicnaMasaza = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav />
      {loading ? (
        <Loader />
      ) : (
        <main className="happy-main dark-theme">
          
          {/* 1. HERO SEKCIJA */}
          <section className="hero-h" style={{ backgroundImage: `url('/ncacic/img/klasicna-hero.png')` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <h1 className="naslov-1">Klasična masaža<br/>Povratak ravnoteži i vitalnosti</h1>
              <p className="podnaslov">
                Zaboravi na bolove u leđima i napetost. Klasična masaža je provjereni temelj za opuštanje mišića, 
                poticanje cirkulacije i oslobađanje tijela od svakodnevnog stresa.
              </p>
            </div>
          </section>

          {/* 2. Z-LAYOUT SEKCIJE */}
          <section className="services py-5">
            <div className="container">
              
              {/* Blok 1 - Što je Klasična masaža? */}
              <div className="service-row">
                <div className="service-img-wrapper">
                  <img src="/ncacic/img/klasicna-1.png" alt="Klasična masaža tehnika" />
                </div>
                <div className="service-text">
                  <h2>Što je Klasična masaža?</h2>
                  <p>Poznata i kao švedska masaža, ovo je najpopularniji oblik terapije dodirom. Temelji se na kombinaciji pet osnovnih tehnika: glađenja, gnječenja, trljanja, lupkanja i vibracija.</p>
                  <p>Ove tehnike u kombinaciji s prirodnim uljima ne samo da opuštaju tijelo, već dubinski stimuliraju protok krvi i limfe, pomažući tijelu da se samo iscijeli i očisti od toksina.</p>
                </div>
              </div>

              {/* Blok 2 - Prednosti */}
              <div className="service-row reverse">
                <div className="service-img-wrapper">
                  <img src="/ncacic/img/klasicna-2.png" alt="Prednosti masaže" />
                </div>
                <div className="service-text">
                  <h2>Zašto tvoje tijelo treba ovu masažu?</h2>
                  <ul className="premium-list">
                    <li><strong>Smanjenje boli:</strong> Učinkovito uklanja bolove u vratu, ramenima i donjem dijelu leđa.</li>
                    <li><strong>Bolja cirkulacija:</strong> Poticanje protoka krvi donosi više kisika u tvoje stanice.</li>
                    <li><strong>Otpuštanje napetosti:</strong> Razbijanje mišićnih čvorova (miogeloza) nastalih uslijed stresa ili dugog sjedenja.</li>
                    <li><strong>Imunitet i detoks:</strong> Ubrzava rad limfnog sustava i izbacivanje štetnih tvari iz organizma.</li>
                  </ul>
                </div>
              </div>

              {/* Blok 3 - Kome je namijenjena? */}
              <div className="service-row">
                <div className="service-img-wrapper">
                  <img src="/ncacic/img/klasicna-3.png" alt="Opuštanje tijela i uma" />
                </div>
                <div className="service-text">
                  <h2>Kome je namijenjena?</h2>
                  <p>Klasična masaža je tvoj prvi izbor ako puno vremena provodiš sjedeći za računalom, osjećaš "težinu" u ramenima, boriš se sa stresom ili jednostavno želiš održavati svoje zdravlje i vitalnost na optimalnoj razini.</p>
                  <blockquote className="premium-quote">
                    "Tvoje tijelo je jedino mjesto u kojem moraš živjeti cijeli život. Učini ga ugodnim."
                  </blockquote>
                </div>
              </div>

            </div>
          </section>

          {/* 3. KONTAKT GUMB
          <div className="premium-contact-section text-center">
            <h3 className="contact-heading">Zaslužuješ trenutak za sebe.</h3>
            <a href="https://wa.me/385976065629?text=Pozdrav!%20Želim%20rezervirati%20termin%20za%20klasičnu%20masažu." 
               className="btn-premium-gold" target="_blank" rel="noreferrer">
               <i className="fab fa-whatsapp"></i> REZERVIRAJ TERMIN
            </a>
          </div> */}

          {/* 4. STICKY WHATSAPP */}
          <a href="https://wa.me/385976065629?text=Zanima%20me%20Klasična%20masaža." className="whatsapp-float" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>

        </main>
      )}
    </>
  );
};

export default KlasicnaMasaza;

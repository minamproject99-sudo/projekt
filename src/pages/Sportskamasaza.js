import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import './SportskaMasaza.css'; // Napravit ćemo novi CSS file ili možeš importirati stari ako želiš

const SportskaMasaza = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuliramo loading ekran
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
          <section className="hero-h" style={{ backgroundImage: `url('/img/sportska-hero.png')` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <h1 className="naslov-1">Sportska masaža: Brži oporavak i vrhunska izvedba</h1>
              <p className="podnaslov">Bilo da si profesionalni sportaš, rekreativac ili osoba koja se suočava s intenzivnim fizičkim naporom na poslu, tvoji mišići zaslužuju posebnu pažnju. Sportska masaža nije samo tretman – to je ključni alat za održavanje tvog tijela u vrhunskoj formi.</p>
            </div>
          </section>

          {/* 2. Z-LAYOUT SEKCIJE */}
          <section className="services py-5">
            <div className="container">

              {/* Blok 1 - Zašto odabrati sportsku masažu? */}
              <div className="service-row">
                <div className="service-img-wrapper">
                  <img src="/img/sportska-1.png" alt="Sportska masaža duboka tkiva" />
                </div>
                <div className="service-text">
                  <h2>Zašto odabrati sportsku masažu?</h2>
                  <p>Za razliku od klasičnih tehnika, sportska masaža se fokusira na dublja tkiva i specifične mišićne skupine koje su najviše opterećene. Koristim snažnije i ciljane zahvate kako bismo:</p>
                  <ul className="premium-list">
                    <li><strong>Ubrzali regeneraciju:</strong> Smanjili vrijeme oporavka nakon treninga ili napora.</li>
                    <li><strong>Poboljšali fleksibilnost:</strong> Povećali opseg pokreta i smanjili rizik od ozljeda.</li>
                    <li><strong>Uklonili mliječnu kiselinu:</strong> Riješili se osjećaja "teških nogu" i mišićnog umora.</li>
                    <li><strong>Povećali cirkulaciju:</strong> Osigurali bolji protok kisika i hranjivih tvari do tvojih mišića.</li>
                  </ul>
                </div>
              </div>

              {/* Blok 2 - Moj pristup */}
              <div className="service-row reverse">
                <div className="service-img-wrapper">
                  <img src="/img/sportska-4.png" alt="Osobni pristup masaži" />
                </div>
                <div className="service-text">
                  <h2>Moj pristup: Razgovor prije svega</h2>
                  <p>Vjerujem da svako tijelo ima svoju priču. Zato kod mene nema "šablonske" masaže. Prije svakog tretmana volim čuti na čemu si radio, gdje osjećaš zatezanje i koji su tvoji ciljevi.</p>
                  
                  <p style={{ marginTop: '20px', color: '#C5A059', fontWeight: '600', fontSize: '1.2rem' }}>Što možeš očekivati:</p>
                  <ul className="premium-list">
                    <li><strong>Ciljani tretman:</strong> Fokusiramo se točno na one točke koje ti stvaraju probleme.</li>
                    <li><strong>Stručnost i snaga:</strong> Primjena tehnika koje prodiru duboko u mišić, ali uz stalnu komunikaciju o intenzitetu pritiska.</li>
                    <li><strong>Savjet za održavanje:</strong> Nakon masaže rado ću ti dati savjet kako održati mišiće gipkima do idućeg susreta.</li>
                  </ul>
                </div>
              </div>

              {/* Blok 3 - Zakazivanje termina */}
              <div className="service-row">
                <div className="service-img-wrapper">
                  <img src="/img/o-meni.png" alt="Rezervacija termina za masažu" />
                </div>
                <div className="service-text">
                  <h2>Čujemo se? Rezerviraj svoj termin pozivom</h2>
                  <p>Budući da je sportska masaža vrlo specifična, najviše volim kad se čujemo direktno. Kratkim razgovorom odmah ćemo definirati što ti je trenutno najpotrebnije i dogovoriti termin koji ti najbolje odgovara.</p>
                  
                  <blockquote className="premium-quote">
                    "Tvoje tijelo je tvoj najvažniji alat. Brini o njemu kako bi ono brinulo o tebi."
                  </blockquote>

                  <p style={{ marginTop: '20px', color: '#C5A059', fontWeight: '600', fontSize: '1.2rem' }}>Kako do termina:</p>
                  <ul className="premium-list">
                    <li><strong>1. Nazovi me:</strong> Klikni na gumb ispod i nazovi me direktno.</li>
                    <li><strong>2. Kratko popričajmo:</strong> Reci mi koji sport treniraš ili kakve bolove osjećaš.</li>
                    <li><strong>3. Potvrdi dolazak:</strong> Rezervirat ćemo vrijeme posvećeno samo tvom oporavku.</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* 3. KONTAKT GUMB - Prilagođen za direktan telefonski poziv
          <div className="premium-contact-section text-center">
            <h3 className="contact-heading" style={{ fontSize: '1.8rem' }}>Ne dopusti da te bol zaustavi.<br/>Vratimo tvoje tijelo u puni pogon!</h3>
            <a
              href="tel:+385976065629"
              className="btn-premium-gold"
            >
              <i className="fas fa-phone-alt"></i> NAZOVI ZA TERMIN
            </a>
          </div> */}

          {/* 4. STICKY WHATSAPP - Ostavljamo ga kao sekundarnu opciju */}
          <a
            href="https://wa.me/385976065629?text=Pozdrav!%20Zanima%20me%20sportska%20masaža."
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

export default SportskaMasaza;

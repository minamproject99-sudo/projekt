import React from "react";
import './Naslovnica.css';

const Naslovnica = () => {
  return (
    <main className="happy-main">
      
      {/* 1. HERO SEKCIJA */}
      <section className="hero-h" style={{ backgroundImage: `url('/img/hero-h.png')` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="naslov-1">Tvoje tijelo zaslužuje biti sretno i zdravo!</h1>
          <p className="podnaslov">Pronađi balans kroz moć aromaterapije, iscjeljujući dodir masaže i duhovni rad koji te vraća sebi.</p>
        </div>
      </section>

      {/* 2. USLUGE Z-LAYOUT (Crno / Zlatni tekst na svijetloj pozadini) */}
      <section className="services py-5">
        <div className="container">
          
          {/* Klasična masaža */}
          <div className="service-row">
            <div className="service-img-wrapper">
              <img src="/img/klasicna-masaza.png" alt="Klasična masaža" className="rounded-img" />
            </div>
            <div className="service-text">
              <h2>Klasična masaža: Snaga dodira za tvoju vitalnost.</h2>
              <p>Osnova svakog wellness rituala. Klasičnom masažom dubinski obrađujemo mišićno tkivo, potičemo cirkulaciju i limfnu drenažu te oslobađamo tijelo nakupljenih toksina.</p>
              <p className="benefit"><strong>Benefit:</strong> Poboljšana cirkulacija, smanjena bol u mišićima i osjećaj potpune regeneracije.</p>
              <a href="/klasicna-masaza" className="link-saznaj-vise">Saznaj više o klasičnoj masaži &rarr;</a>
            </div>
          </div>

          {/* Relax Aromaterapija (Obrnuti redoslijed - Z layout) */}
          <div className="service-row reverse">
            <div className="service-img-wrapper">
              <img src="/img/relax.png" alt="Relax masaža" className="rounded-img" />
            </div>
            <div className="service-text">
              <h2>Relax aromaterapija: Putovanje kroz osjetila.</h2>
              <p>Više od masaže – ovo je holističko iskustvo koje spaja nježnost dugih, tečnih pokreta i moćnu energiju eteričnih ulja. Svako ulje biramo intuitivno, prema tvojim trenutačnim potrebama.</p>
              <p className="benefit"><strong>Benefit:</strong> Duboka relaksacija uma, otpuštanje stresa i emocionalna ravnoteža.</p>
              <a href="/relax-masaza" className="link-saznaj-vise">Saznaj više o relax masaži &rarr;</a>
            </div>
          </div>

          {/* Sportska masaža */}
          <div className="service-row">
            <div className="service-img-wrapper">
              <img src="/img/sportska-3.png" alt="Sportska masaža" className="rounded-img" />
            </div>
            <div className="service-text">
              <h2>Sportska masaža: Tvoj saveznik u pokretu.</h2>
              <p>Dinamičan i intenzivan tretman namijenjen onima koji traže brzi oporavak. Fokusiramo se na specifične mišićne skupine izložene naporu, koristeći snažnije tehnike koje razbijaju "čvorove".</p>
              <p className="benefit"><strong>Benefit:</strong> Brži oporavak mišića, veća fleksibilnost i prevencija sportskih ozljeda.</p>
              <a href="/sportska-masaza" className="link-saznaj-vise">Saznaj više o sportskoj masaži &rarr;</a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. AROMATERAPIJA & POZIV (Tamna pozadina, Z-layout) */}
      <section className="aroma-kontakt py-5">
        <div className="container">
          
          {/* Uvod u aromaterapiju */}
          <div className="aroma-content text-center mb-5">
            <h2 className="zlatni-naslov">Priroda u bočici: Ručno rađeni ljekoviti pripravci</h2>
            <p className="aroma-opis">Moja strast prema biljkama pretočena je u male serije proizvoda koji poštuju ritam prirode i potrebe tvog tijela. Svaka krema, ulje i macerat nastali su s namjerom da podrže tvoje zdravlje na najnježniji način – direktno iz prirode u tvoj dom.</p>
          </div>

          {/* Ljekovite kreme (Slika lijevo, tekst desno) */}
          <div className="service-row aroma-row">
            <div className="service-img-wrapper">
              <img src="/img/kreme.png" alt="Ljekovite kreme i melemi" className="rounded-img" />
            </div>
            <div className="service-text text-start">
              <h2>Ljekovite kreme i melemi</h2>
              <p>Bogate teksture na bazi pčelinjeg voska i bilja, stvorene za dubinsku njegu i umirenje kože. Nježno hrane kožu, vraćaju joj elastičnost i štite ju od vanjskih utjecaja.</p>
            </div>
          </div>

          {/* Aromaterapijska ulja (Tekst lijevo, slika desno - Reverse) */}
          <div className="service-row reverse aroma-row">
            <div className="service-img-wrapper">
              <img src="/img/ulja.webp" alt="Aromaterapijska ulja" className="rounded-img" />
            </div>
            <div className="service-text text-start">
              <h2>Aromaterapijska ulja</h2>
              <p>Pažljivo birane mješavine koje uravnotežuju duh i opuštaju tijelo. Svaka kapljica nosi esenciju čistog ljekovitog bilja koja djeluje opuštajuće na živčani sustav.</p>
            </div>
          </div>

          {/* Macerati (Slika lijevo, tekst desno) */}
          <div className="service-row aroma-row">
            <div className="service-img-wrapper">
              <img src="/img/macerati.png" alt="Macerati" className="rounded-img" />
            </div>
            <div className="service-text text-start">
              <h2>Macerati (Biljna ulja)</h2>
              <p>Čista snaga sunca i bilja (poput nevena, gospine trave i lavande) za najprirodniju njegu lica i tijela. Stara tradicija sačuvana u svakoj bočici za dubinsku regeneraciju.</p>
            </div>
          </div>

          {/* Link Saznaj Više i Call Box */}
          <div className="text-center mt-5">
            <a href="/aromaterapija" className="link-saznaj-vise svijetlo">Saznaj više o svim ljekovitim pripravcima &rarr;</a>

            <div className="call-box mt-5">
              <h3>Čujemo se? Volim osobni pristup.</h3>
              <p>Budući da su moji pripravci rađeni u malim serijama i često su sezonski, najviše volim kad se čujemo direktno. Tako ti mogu najbolje savjetovati koji bi pripravak najbolje odgovarao tvojim trenutnim potrebama.</p>
              <a href="tel:+385976065629" className="btn-primary mt-4">NAZOVI ZA SAVJET I NARUDŽBU</a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. STICKY WHATSAPP CTA */}
      <a href="https://wa.me/385976065629?text=Zdravo!%20Zanima%20me%20masaža%20ili%20pripravak." className="whatsapp-float" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

    </main>
  );
};

export default Naslovnica;

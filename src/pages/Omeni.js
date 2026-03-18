import React from 'react';
import { Link } from 'react-router-dom';
import './Omeni.css';

const Omeni = () => {
  return (
    <div className="omeni-page">
      {/* HERO NASLOVNA SEKCIJA */}
      <div className="hero-omeni" style={{ backgroundImage: `url('/ncacic/img/hero-omeni.png')` }}>
        <div className="hero-overlay">
          <h1>Moja Priča</h1>
          <p className="hero-podnaslov">Upoznajmo se kroz dodir i povjerenje</p>
        </div>
      </div>

      <div className="omeni-content">
        {/* 1. SEKCIJA */}
        <div className="omeni-sekcija">
          <div className="omeni-slika-wrapper personal-img">
            <img src="/ncacic/img/o-meni.png" alt="Nataša - Moja priča" className="omeni-img" />
          </div>
          <div className="omeni-tekst">
            <h2>Dobrodošli u moj svijet</h2>
            <p>Zovem se Nataša i moja misija je pomoći ti da ponovno pronađeš balans između uma i tijela. Kroz godine učenja i rada, shvatila sam da masaža nije samo fizički tretman, već duboki proces opuštanja i iscjeljenja.</p>
            <p>U svom radu spajam razne tehnike, intuiciju i potpuno individualan pristup. Svako tijelo priča svoju priču, a moj zadatak je pažljivo ga poslušati i pružiti mu točno ono što mu u tom trenutku treba.</p>
            <blockquote className="premium-quote">
              "Tvoje tijelo je tvoj najvažniji alat i tvoj jedini pravi dom. Brini o njemu kako bi ono brinulo o tebi."
            </blockquote>
          </div>
        </div>

        {/* 2. SEKCIJA */}
        <div className="omeni-sekcija reverse">
          <div className="omeni-tekst">
            <h2>Moj pristup i vizija</h2>
            <p>Vjerujem da prava njega počinje u trenutku kada uđeš u moj prostor. Miris eteričnih ulja, ugodna glazba i potpuni mir kreirani su s namjerom da sve tvoje brige ostanu ispred vrata.</p>
            <h3 className="omeni-podnaslov">Što možeš očekivati?</h3>
            <ul className="premium-lista">
              <li><strong>Potpuna posvećenost:</strong> Tretman prilagođavam tvom trenutnom stanju i potrebama.</li>
              <li><strong>Vrhunska ulja:</strong> Koristim isključivo prirodne, ručno rađene pripravke.</li>
              <li><strong>Siguran prostor:</strong> Mjesto gdje se možeš potpuno opustiti i biti svoja.</li>
            </ul>
            <a href="https://wa.me/385976065629?text=Pozdrav!%20Čitala%20sam%20stranicu%20O%20meni%20i%20voljela%20bih%20se%20naručiti%20na%20masažu." className="btn-premium-gold" target="_blank" rel="noopener noreferrer">
              POVEŽIMO SE (WhatsApp)
            </a>
          </div>
          <div className="omeni-slika-wrapper">
            <img src="/ncacic/img/sportska-4.png" alt="Moj radni prostor i pristup" className="omeni-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Omeni;

import React from 'react';
import { Link } from 'react-router-dom';
import './PoklonBon.css';

const PoklonBon = () => {
  return (
    <div className="poklon-page">
      {/* HERO NASLOVNA SEKCIJA */}
      <div className="bon-naslovna" style={{ backgroundImage: `url('/ncacic/img/bon-naslovna.jpg')` }}>
        <div className="hero-overlay">
          <h1>Poklon Bon</h1>
          <p className="hero-podnaslov">Daruj trenutke potpunog opuštanja</p>
        </div>
      </div>

      {/* SADRŽAJ Sekcije */}
      <div className="bon-content">
        
        {/* 1. SEKCIJA: Slika lijevo, Tekst desno */}
        <div className="bon-sekcija">
          <div className="bon-slika-wrapper">
            <img src="/ncacic/img/bon-masaza.jpeg" alt="Poklon bon masaža" className="bon-img" />
          </div>
          <div className="bon-tekst">
            <h2>Daruj slobodu izbora i potpuni mir</h2>
            <p>
              Poklon bon možeš kreirati točno onako kako želiš – odaberi specifičan tretman kojim želiš nekoga razveseliti 
              ili odredi iznos (budžet), a osobi kojoj daruješ prepusti slatku brigu biranja idealne masaže i trajanja.
            </p>
            <Link to="/kontakt" className="btn-premium-gold">Kupi Poklon Bon</Link>
          </div>
        </div>

        {/* 2. SEKCIJA: Tekst lijevo, Slika desno (Obrnuti raspored) */}
        <div className="bon-sekcija reverse">
          <div className="bon-tekst">
            <h2>Kako do bona?</h2>
            <p>Neka darivanje bude jednostavno i bez stresa!</p>
            <ul className="premium-lista">
              <li><strong>Digitalna dostava:</strong> Bon možemo poslati e-mailom izravno tebi ili osobi koju želiš iznenaditi – idealno za poklone u zadnji tren.</li>
              <li><strong>Osobni dolazak:</strong> Ako više voliš fizički oblik, svrati osobno u salon i preuzmi svoj bon.</li>
              <li><strong>Jednostavno plaćanje:</strong> Uplatu možeš izvršiti brzo i lako na žiro račun ili gotovinom prilikom dolaska.</li>
              <li><strong>Podrška:</strong> Nazovi me i pružit ću ti sve potrebne informacije.</li>
            </ul>
            <Link to="/kontakt" className="btn-premium-gold">Naruči svoj bon</Link>
          </div>
          <div className="bon-slika-wrapper">
            <img src="/ncacic/img/bon-aromaterapija.jpeg" alt="Poklon bon aromaterapija" className="bon-img" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PoklonBon;

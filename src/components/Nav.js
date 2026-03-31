import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top custom-happy-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/ncacic/img/logo-3.png" alt="Logo" height="100" className="nav-logo" />
          </Link>

          {/* Hamburger Menu (za mobitele) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Linkovi */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/">Naslovnica</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/o-meni">O meni</Link>
              </li>

              {/* ✅ ISPRAVAK: span umjesto Link to="#" da Bootstrap dropdown radi ispravno */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="ddMasaze"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: 'pointer' }}
                >
                  Vrste Masaža
                </span>
                <ul className="dropdown-menu custom-dropdown" aria-labelledby="ddMasaze">
                  <li><Link className="dropdown-item" to="/klasicna-masaza">Klasična masaža</Link></li>
                  <li><Link className="dropdown-item" to="/sportska-masaza">Sportska masaža</Link></li>
                  <li><Link className="dropdown-item" to="/relax-masaza">Relax masaža</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/poklon-bon">Poklon Bon</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link btn-kontakt" to="/kontakt">Kontakt</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

import React from 'react'

const Nav = () => {
  return (
    <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/index.html">
            <img src="img/logo-1.png" alt="Logo" height="70" />
          </a>

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

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                <a className="nav-link" href="/">NASLOVNICA</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="/omeni">O MENI</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/masaze"
                  id="ddMasaze"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MASAŽE
                </a>
                <ul className="dropdown-menu" aria-labelledby="ddMasaze">
                  <li><a className="dropdown-item" href="/klasicna-masaza">Klasična masaža</a></li>
                  <li><a className="dropdown-item" href="/sportska-masaza">Sportska masaža</a></li>
                  <li><a className="dropdown-item" href="/relax-masaza">Relax masaža</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/aromaterapija"
                  id="ddAromaterapija"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  AROMATERAPIJA
                </a>
                <ul className="dropdown-menu" aria-labelledby="ddAromaterapija">
                  <li><a className="dropdown-item" href="/ljekoviti-pripravci">Ljekoviti pripravci</a></li>
                  <li><a className="dropdown-item" href="/kreme-i-macerati">Kreme i macerati</a></li>
                </ul>
              </li>

                <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/meditacije"
                  id="ddMeditacije"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 MEDITACIJE
                </a>
                <ul className="dropdown-menu" aria-labelledby="ddMeditacije">
                  <li><a className="dropdown-item" href="/buddha-vipassana">Buddha Vipassana</a></li>
                  <li><a className="dropdown-item" href="/Buddha-vipassana-saying-yes">Buddha Vipassana Saying YES</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/poklonbon"
                  id="ddPoklonBon"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  POKLON BON 
                </a>
                <ul className="dropdown-menu" aria-labelledby="ddPoklonBon">
                  <li><a className="dropdown-item" href="/parcijalna-masaza">Parcijalna masaža</a></li>
                  <li><a className="dropdown-item" href="/masaza-cijelog-tijela">Masaža cijelog tijela</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/blog">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/kontakt">KONTAKT</a>
              </li>


            </ul>
{/* 
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="/language" title="Language">
                  <img src="img/header/Language.svg" alt="Language" className="icon-lg" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin" title="Sign in">
                  <img src="img/header/user.svg" alt="Sign in" className="icon-sm" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart" title="Cart">
                  <img src="img/header/cart.svg" alt="Cart" className="icon-lg" />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav> 
    </>
  )
}

export default Nav

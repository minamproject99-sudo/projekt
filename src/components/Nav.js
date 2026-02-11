import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/index.html">
            <img src="img/logo-1.png" alt="Logo" height="70" />
          </Link>

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
                <Link className="nav-link" to="/">NASLOVNICA</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/omeni">O MENI</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/masaze"
                  id="ddMasaze"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MASAŽE
                </Link>
                <ul className="dropdown-menu" aria-labelledby="ddMasaze">
                  <li><Link className="dropdown-item" to="/klasicna-masaza">Klasična masaža</Link></li>
                  <li><Link className="dropdown-item" to="/sportska-masaza">Sportska masaža</Link></li>
                  <li><Link className="dropdown-item" to="/relax-masaza">Relax masaža</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/aromaterapija"
                  id="ddAromaterapija"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  AROMATERAPIJA
                </Link>
                <ul className="dropdown-menu" aria-labelledby="ddAromaterapija">
                  <li><Link className="dropdown-item" to="/ljekoviti-pripravci">Ljekoviti pripravci</Link></li>
                  <li><Link className="dropdown-item" to="/kreme-i-macerati">Kreme i macerati</Link></li>
                </ul>
              </li>

                <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/meditacije"
                  id="ddMeditacije"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 MEDITACIJE
                </Link>
                <ul className="dropdown-menu" aria-labelledby="ddMeditacije">
                  <li><Link className="dropdown-item" to="/buddha-vipassana">Buddha Vipassana</Link></li>
                  <li><Link className="dropdown-item" to="/Buddha-vipassana-saying-yes">Buddha Vipassana Saying YES</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/poklon-bon">POKLON BON</Link>
              </li>
             

              <li className="nav-item">
                <Link className="nav-link" to="/blog">BLOG</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontakt">KONTAKT</Link>
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

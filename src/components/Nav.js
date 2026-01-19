import React from 'react'

const Nav = () => {
  return (
    <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/index.html">
            <img src="img/logo.png" alt="Logo" height="18" />
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ddElectric"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ELECTRIC
                </a>
                <ul className="dropdown-menu" aria-labelledby="ddElectric">
                  <li><a className="dropdown-item" href="#">Electric Ace</a></li>
                  <li><a className="dropdown-item" href="#">Electric Ivy</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ddCity"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CITY
                </a>
                <ul className="dropdown-menu" aria-labelledby="ddCity">
                  <li><a className="dropdown-item" href="#">Caféracer</a></li>
                  <li><a className="dropdown-item" href="#">Robyn</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ddKids"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  KIDS
                </a>
                <ul className="dropdown-menu" aria-labelledby="ddKids">
                  <li><a className="dropdown-item" href="#">El Bear</a></li>
                  <li><a className="dropdown-item" href="#">El Robin</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">ACCESSORIES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">STORES</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ddLeasing"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LEASING
                </a>
                <ul className="dropdown-menu" aria-labelledby="ddLeasing">
                  <li><a className="dropdown-item" href="#">Private</a></li>
                  <li><a className="dropdown-item" href="#">Business</a></li>
                </ul>
              </li>
            </ul>

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
            </ul>
          </div>
        </div>
      </nav> 
    </>
  )
}

export default Nav

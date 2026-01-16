import React from 'react';

const Home = () => {
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

      <section className="hero d-flex align-items-center text-white mb-5">
        <div className="container">
          <span className="text-uppercase">Veloretti Business</span>
          <h1>Bike Lease Plan For Employees</h1>
        </div>
      </section>

      <section className="home-1 py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="img/home-1.jpg" alt="Naslovna slika prva" />
            </div>
            <div className="col-md-6">
              <div className="max-466 ms-md-auto my-4">
                <h2 className="opacity-90">Bike plans for employees.</h2>
                <p className="opacity-90 mt-3 mb-4">
                  Veloretti Electrics benefit both the environment and the health of
                  your employees. Oh, and they look good too. Cost-free for the
                  employer and outside of the WKR.
                </p>
                <a href="#">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-2 d-flex align-items-center text-white mb-5">
        <div className="container">
          <div className="col-md-6">
            <div className="max-466 ms-md-auto my-5">
              <h2 className="opacity-90">Service, maintenance and insurance</h2>
              <p className="opacity-90 mt-3 mb-4">
                The lease includes an all-in service package. Throughout the entire
                36 months, you are fully insured against damage, theft and
                maintenance. In addition, you always have access to roadside assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-3 py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="img/home-3.jpg" alt="Naslovna slika treca" />
            </div>
            <div className="col-md-6">
              <div className="max-466 ms-md-auto my-4">
                <h2 className="opacity-90">Free of charge for employers.</h2>
                <p className="opacity-90 mt-3 mb-4">
                  The bike plan is totally independent of the WKR and is free for you as
                  an employer. The employee pays the lease costs and you, as the
                  employer, decide whether you want to contribute to the costs.
                </p>
                <a href="#">Cost example</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-4 py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img src="img/home-4.jpg" alt="Naslovna slika cetvrta" />
            </div>
            <div className="col-md-6">
              <div className="max-466 ms-md-auto my-4">
                <h2 className="opacity-90">How it works.</h2>
                <ul className="opacity-90 mt-3 mb-4">
                  <li>
                    <h3 className="list-item">Register your company</h3>
                    <p className="opacity-50 mt-3 mb-4">
                      Fill in our registration form with your company details. After
                      your registration, our leasing partner will do a credit check.
                    </p>
                    <h3 className="list-item">Determine the requirements</h3>
                    <p className="opacity-50 mt-3 mb-4">
                      You get access to the digital platform. Set the requirements.
                    </p>
                    <h3 className="list-item">Ride your bike!</h3>
                    <p className="opacity-50 mt-3 mb-4">
                      Let's go! Your employees can choose their bikes.
                    </p>
                    <h3 className="list-item">Administration</h3>
                    <p className="opacity-50 mt-3 mb-4">
                      Everything in one place. Digital platform gives you an easy overview.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <a href="#top" className="scroll-to-top-button" aria-label="Povratak na vrh">
            <img src="./img/scroll-to-top-button.png" alt="to top" />
          </a>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <h4>Explorer</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Electric bikes</a></li>
                    <li><a href="#">City bikes</a></li>
                  </ul>
                </div>
                {/* Ostatak kolona... */}
              </div>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-md-4">
              <h4 className="mb-4">Join the Ride.</h4>
              <p className="mb-4">Sign up for our newsletter.</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="email-input"
                />
                <button type="submit" className="subscribe-button">Subscribe</button>
              </div>
              <div className="privacy-consent mt-4">
                <input type="checkbox" id="exampleCheck1" />
                <label className="privacy-check ms-2" htmlFor="exampleCheck1">
                  By signing up, I agree to the <a href="#">privacy policy</a>.
                </label>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
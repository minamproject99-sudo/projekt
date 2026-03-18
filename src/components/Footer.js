import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="predkraj">
        <div className="container">
          <h3>Tvoje tijelo pamti sve. Pruži mu odmor koji zaslužuje.</h3>
          <p>Bilo da trebaš sportski oporavak ili trenutak čistog mira, tu sam za tebe. Dogovori svoj termin jednim pozivom.</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/385976065629?text=Pozdrav!%20Želim%20rezervirati%20masažu"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              NAZOVI ZA TERMIN
            </a>
            <Link to="/poklon-bon" className="btn-secondary">
              KUPI POKLON BON
            </Link>
          </div>
          <div className="cta-caption">
            📍 Pula, [Verudela 8] • Dostupni termini unutar 72h
          </div>
        </div>
      </section>

      <footer className="happy-footer">
        <div className="container">
          <div className="footer-grid">

            <div className="footer-col">
              <h4>Happy And Healthy, obrt za zdravlje i njegu tijela</h4>
              <p>Posvećena tvom zdravlju i oporavku kroz snagu dodira i prirodnih esencija.</p>
            </div>

            <div className="footer-col">
              <h5>Usluge</h5>
              <ul>
                <li><Link to="/klasicna-masaza">Klasična masaža</Link></li>
                <li><Link to="/relax-masaza">Relax masaža</Link></li>
                <li><Link to="/sportska-masaza">Sportska masaža</Link></li>
                <li><Link to="/poklon-bon">Poklon bonovi</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Kontakt</h5>
              <ul>
                <li>📍 Pula, Verudela 8</li>
                <li>📞 <a href="tel:+385976065629">+385 97 606 5629</a></li>
                <li>🕒 Pon-Pet: 08:00-16:00</li>
                <li>🕒 Sub: 08:00-12:00</li>
                <li>Nedjeljom i praznicima zatvoreno</li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Prati nas</h5>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/happy.and.healthy.obrt/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100087888142763#"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="bottom-content">
              <span>© 2026 Happy And Healthy. Sva prava pridržana.</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/385976065629?text=Pozdrav!%20Želim%20rezervirati%20termin"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Footer;

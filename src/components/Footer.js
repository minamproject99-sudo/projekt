import React from 'react'

const Footer = () => {
  return (
    <>
<section class="predkraj">
  <div class="container">
    <h3>Tvoje tijelo pamti sve. Pruži mu odmor koji zaslužuje.</h3>
    
    <p>Bilo da trebaš sportski oporavak ili trenutak čistog mira, tu sam za tebe. Dogovori svoj termin jednim pozivom.</p>
    
    <div class="cta-buttons">
      <a href="https://wa.me/385976065629?text=Pozdrav!%20Želim%20rezervirati%20masažu" 
         class="btn-primary" target="_blank">
        NAZOVI ZA TERMIN
      </a>
      
      <a href="/poklon-bon" class="btn-secondary">
        KUPI POKLON BON
      </a>
    </div>
    
    <div class="cta-caption">
      📍 Pula, [Verudela 8] • Dostupni termini unutar 72h
    </div>
  </div>
</section>


<footer class="happy-footer">
  <div class="container">
    <div class="footer-grid">
      

      <div class="footer-col">
        <h4>Happy And Healthy, obrt za zdravlje i njegu tijela</h4>
        <p>Posvećena tvom zdravlju i oporavku kroz snagu dodira i prirodnih esencija.</p>
      </div>
      
     
      <div class="footer-col">
        <h5>Usluge</h5>
        <ul>
          <li><a href="/klasicna-masaza">Klasična masaža</a></li>
          <li><a href="/relax-masaza">Relax masaža</a></li>
          <li><a href="/sportska-masaza">Sportska masaža</a></li>
          <li><a href="/poklon-bon">Poklon bonovi</a></li>
          <li><a href="/aromaterpija">Aromaterapija</a></li>
          <li></li>
        </ul>
      </div>
      
     
      <div class="footer-col">
        <h5>Kontakt</h5>
        <ul>
          <li>📍 Pula, Verudela 8</li>
          <li>📞 <a href="tel:+385976065629">+385 97 606 5629</a></li>
          <li>🕒 Pon-Pet: 08:00-16:00</li>
          <li>🕒 Sub: 08:00-12:00</li>
          <li>Nedjeljom i praznicima zatvoreno</li>
        </ul>
      </div>
      
   
      <div class="footer-col">
        <h5>Prati nas</h5>
        <div class="social-links">
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          {/* <a href="#" aria-label="Youtube"><i class="fab fa-youtube"></i></a> */}
        </div>
      </div>
      
    </div>
  </div>
  
  <div class="footer-bottom">
    <div class="container">
      <div class="bottom-content">
        <span>© 2026 Happy And Healthy. Sva prava pridržana.</span>
        {/* <div class="bottom-links">
          <a href="/uvjeti">Opći uvjeti</a>
          <a href="/privatnost">Politika privatnosti</a>
        </div> */}
      </div>
    </div>
  </div>
</footer>

<a href="https://wa.me/385976065629?text=Pozdrav!%20Želim%20rezervirati%20termin"
   class="whatsapp-float"
   target="_blank" rel="noopener">
  <i class="fa-brands fa-whatsapp"></i>
</a>


    </>
  );
};

export default Footer

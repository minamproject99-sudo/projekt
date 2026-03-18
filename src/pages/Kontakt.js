import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Kontakt.css";

const Kontakt = () => {
  const [page, setPage] = useState(null);
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(
          "https://front2.edukacija.online/backend/wp-json/wp/v2/pages/604?_embed"
        );
        if (!response.ok) {
          throw new Error("Greška pri dohvatu stranice");
        }
        const data = await response.json();
        setPage(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPage();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_3jk0vgh";
    const TEMPLATE_ID = "template_xju011i";
    const PUBLIC_KEY = "AwHvvrjZThx3sHhQG";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="kontakt-page">

      {/* 1. Sadržaj iz WordPressa */}
      <div className="kontakt-wp-sadrzaj">
        {page && page.content && page.content.rendered ? (
          <div
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        ) : (
          <p className="loading-text">Učitavanje podataka...</p>
        )}
      </div>

      {/* 2. Forma za kontakt */}
      <div className="kontakt-forma-container">
        <div className="form-wrapper">
          <div className="form-tekst">
            <h2>Pošaljite nam upit</h2>
            <p>Ispunite obrazac ispod i javit ćemo vam se u najkraćem mogućem roku kako bismo dogovorili vaš termin.</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="luxury-form">
            <div className="form-grupa">
              <label>Tvoje ime</label>
              <input type="text" name="user_name" required placeholder="Unesi ime i prezime" />
            </div>

            <div className="form-grupa">
              <label>Email adresa</label>
              <input type="email" name="user_email" required placeholder="Unesi tvoj email" />
            </div>

            <div className="form-grupa">
              <label>Poruka / Željeni termin</label>
              <textarea name="message" rows="5" required placeholder="Kako ti mogu pomoći?"></textarea>
            </div>

            <button type="submit" className="btn-premium">
              {isSent ? "PORUKA JE USPJEŠNO POSLANA ✓" : "POŠALJI PORUKU"}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Kontakt;



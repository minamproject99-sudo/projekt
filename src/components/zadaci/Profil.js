// Funkcija za prikaz korisnika
import Korisnik from "./data/korisnik.json";

const Profil = () => {
  const Korisnik = {
    // Javascript objekt se sastoji od "key" i "value" parova
    "ime": "Marko",
    "prezime": "Marković",
    "godine": 28,
    "vozacka": true,
    "vjestine": ["Html", "Css", "JavaScript"],
    "adresa": {
      "ulica": "Bulevar Kralja Aleksandra",
      "broj": 73,
      "grad": "Zagreb",
      "pbroj": 10000,
      "drzava": {
        "naziv": "Hrvatska",
        "oznaka": "HR",
        "valuta": "EUR"
      },
    },
  };

  // const KorisnikJSON = '{ "ime": "Marko", "prezime": "Marković", "godine": "28", "vozacka": true, "vjestine": ["Html", "Css", "JavaScript"], "adresa": "Bulevar Kralja Aleksandra", "broj": 73, "grad": "Zagreb", "pbroj": "10000" }'
  // const Korisnik = JSON.parse(KorisnikJSON);

  //Ova komponenta vraća informacije o korisniku
  return (
    <div className="container">
      <h1>Profil korisnika</h1>

      <div>
        Vještine:
        <ul>
          {Korisnik.vjestine.map((vjestina, index) => (
            <li>
              {index + 1}. {vjestina}
            </li>
          ))}
        </ul>
      </div>

      <p>Ime: {Korisnik.ime}</p>
      <p>Prezime: {Korisnik.prezime}</p>
      <p>Godine: {Korisnik.godine}</p>
      <p>Vozacka: {Korisnik.vozacka ? "Da" : "Ne"}</p>
      <p>Vjestine: {Korisnik.vjestine.join(", ")}</p>
      <p>
        Adresa: {Korisnik.adresa.ulica} {Korisnik.adresa.broj},{" "}
        {Korisnik.adresa.grad}, {Korisnik.adresa.pbroj}
      </p>
    </div>
  );
};

export default Profil;

// Funkcija za prikaz korisnika
import Korisnik from './data/korisnik.json';

const Profil = () => {

    const Korisnik = {
        // Javascript objekt se sastoji od "key" i "value" parova
    "ime": 'Marko',
    "prezime": 'Marković',
    "godine": '28',
    "vozacka": true,
    "vjestine": ['Html', 'Css', 'JavaScript'],

    "adresa": 'Bulevar Kralja Aleksandra',
        "broj": '73',
        "grad": 'Zagreb',
        "pbroj": '10000'

}
    //Ova komponenta vraća informacije o korisniku
  return (
    <div className='container'>
    
      <h1>Profil korisnika</h1>
      <p>Ime: {Korisnik.ime}</p>
      <p>Prezime: {Korisnik.prezime}</p>
      <p>Godine: {Korisnik.godine}</p>
      <p>Vozacka dozvola: {Korisnik.vozacka ? "Da" : "Ne"}</p>
      <div>Vjestine:
        <ul>

{/*           
              // Map koristimo za prolazak kroz niz ( i ispisivanje vrijednosti, u ovom slučaju) */}
   {Korisnik.vjestine.map(
            (vjestina,index) => (
              <li>{index+1}. {vjestina}</li>


            )
          )}
    
          {Korisnik.vjestine.map(
            (vjestina) => (
              <li>{vjestina}</li>
            )
          )}
        </ul>
        </div>
        
        
      <p>Ulica: {Korisnik.adresa.ulica}</p>
      <p>Grad: {Korisnik.grad}</p>
      <p>Postanski broj: {Korisnik.pbroj}</p>
      </div>
  );
}


export default Profil 

import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const PoklonBon = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Postavimo odmah na true da ne bljesne prazno

  useEffect(() => {
    fetch("https://front2.edukacija.online/backend/wp-json/wp/v2/pages/1170?_embed")
      .then((response) => response.json())
      .then((data) => {
        // Provjeravamo je li API vratio grešku ili podatke
        if (data.id) {
          setPosts([data]); // Spremanje objekta u niz
        } else {
          console.log("Nema podataka ili greška:", data);
        }
      })
      .catch((error) => console.error("Greška pri dohvatu:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loader />}
      
      <div className="bon-page">
        <div className="container-bon">
          
          
          <div className="row justify-content-center"> {/* Centriranje sadržaja */}
            {posts?.map((page) => {
              // 1. DOHVAĆANJE SLIKE - Robusnija metoda
              const media = page._embedded?.["wp:featuredmedia"]?.[0];
              // Pokušaj naći sliku: Prvo probaj direktni URL, pa 'full', pa 'large'
              const image = media?.source_url || 
                            media?.media_details?.sizes?.full?.source_url || 
                            media?.media_details?.sizes?.large?.source_url;

              return (
                <div key={page.id} className="col-md-8 mb-4 blog-post">
                  
                  {/* Prikaz slike samo ako postoji URL */}
                  {image ? (
                    <img
                      src={image}
                      className="img-fluid mb-4 rounded" // Dodao sam img-fluid za responzivnost
                      alt={page.title.rendered}
                      style={{ width: "100%", height: "auto" }} // Osiguranje da slika ne pobjegne
                    />
                  ) : (
                    // Opcionalno: Debug poruka ako slike nema (obrišite kasnije)
                    // <p style={{color: 'red'}}>Slika nije pronađena u API-ju.</p>
                    null)}

                  <h2>{page.title.rendered}</h2>

                  {/* Koristimo 'content' za puni tekst stranice, 'excerpt' je samo sažetak */}
                  <div
                    className="content-body"
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                  />

                  <hr />

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PoklonBon;





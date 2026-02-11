import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Omeni = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // URL stavljamo u varijablu radi preglednosti
    const apiUrl = "https://front2.edukacija.online/backend/wp-json/wp/v2/pages/1213?_embed";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Ako je vraćen validan objekt s ID-jem, spremamo ga u niz
        if (data.id) {
          setPosts([data]);
        } else {
          console.warn("API nije vratio očekivane podatke:", data);
        }
      })
      .catch((error) => console.error("Greška pri dohvatu:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div className="omeni-page py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            
            {posts?.map((page) => {
              // --- 1. PRIPREMA PODATAKA (Destrukturiranje) ---
              const title = page.title.rendered;
              const content = page.content.rendered;
              const date = new Date(page.date).toLocaleDateString("hr-HR");
              
              // --- 2. LOGIKA ZA SLIKU ---
              // Dohvaćamo medijski objekt
              const media = page._embedded?.["wp:featuredmedia"]?.[0];
              
              // Tražimo najbolju dostupnu verziju slike (prioritet: Full -> Original -> Large)
              const imageUrl = 
                media?.media_details?.sizes?.full?.source_url || 
                media?.source_url || 
                media?.media_details?.sizes?.large?.source_url;

              return (
                <div key={page.id} className="col-lg-9 col-md-10">
                  
                  {/* Kartica za ljepši prikaz */}
                  <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                    
                    {/* --- UBACIVANJE SLIKE --- */}
                    {imageUrl && (
                      <div className="position-relative">
                        <img
                          src={imageUrl}
                          className="w-100 object-fit-cover"
                          alt={title}
                          style={{ maxHeight: "400px", objectFit: "cover" }} 
                        />
                      </div>
                    )}

                    <div className="card-body p-4 p-md-5">
                      <h1 className="card-title mb-4 fw-bold text-dark">
                        {title}
                      </h1>

                      {/* Sadržaj teksta */}
                      <div
                        className="content-body text-secondary"
                        style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />

                      <hr className="my-4 text-muted" />
                      
                      <div className="text-end text-muted small">
                        Objavljeno: {date}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default Omeni;

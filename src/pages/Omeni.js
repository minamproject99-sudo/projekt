import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import './Omeni.css'; 

const Omeni = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ako si promijenila ID, pazi da ovdje ostane tvoj točan ID stranice (npr. 1213)
    const apiUrl = "https://front2.edukacija.online/backend/wp-json/wp/v2/pages/1213?_embed";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
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
      <Nav />
      {loading && <Loader />}

      <div className="omeni-page">
        <div className="container">
          <div className="row justify-content-center">
            
            {posts?.map((page) => {
              const title = page.title.rendered;
              const content = page.content.rendered;
              
              const media = page._embedded?.["wp:featuredmedia"]?.[0];
              const imageUrl = 
                media?.media_details?.sizes?.full?.source_url || 
                media?.source_url || 
                media?.media_details?.sizes?.large?.source_url;

              return (
                <div key={page.id} className="col-lg-10 col-md-12">
                  
                  {/* ZAGLAVLJE */}
                  <div className="page-header text-center">
                    <h1 className="naslov-1" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="podnaslov-tamni">Tvoje putovanje prema balansu počinje ovdje.</p>
                  </div>

                  {/* ISTAKNUTA SLIKA */}
                  {imageUrl && (
                    <div className="featured-image-wrapper">
                      <img src={imageUrl} className="premium-featured-image" alt="O meni" />
                    </div>
                  )}

                  {/* WORDPRESS SADRŽAJ */}
                  <div className="o-meni-wp-content" dangerouslySetInnerHTML={{ __html: content }} />

                </div>
              );
            })}

          </div>
        </div>

        {/* --- NOVI LUKSUZNI "POVEŽIMO SE" GUMB NA DNU STRANICE --- */}
        {!loading && (
          <div className="premium-contact-section text-center">
            <h3 className="contact-heading">Započnimo tvoju transformaciju.</h3>
            <a 
              href="https://wa.me/385976065629?text=Pozdrav!%20Čitala%20sam%20stranicu%20O%20meni%20i%20voljela%20bih%20se%20naručiti." 
              className="btn-premium-gold" 
              target="_blank" 
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i> POVEŽIMO SE
            </a>
          </div>
        )}

      </div>
    </>
  );
};

export default Omeni;

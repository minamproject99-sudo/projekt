import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Masaze = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://front2.edukacija.online/backend/wp-json/wp/v2/usluge?_embed")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="bon-naslovna" style={{ backgroundImage: `url('/ncacic/img/bon-naslovna.jpg')` }}>
        <div className="hero-overlay">
          <h1>Sve usluge</h1>
          <p className="hero-podnaslov">Odaberi idealan tretman za sebe</p>
        </div>
      </div>
      
      <div className="container py-5">
        {loading && <Loader />}
        
        <div className="row">
          {!loading && posts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card h-100 shadow-sm">
                {post._embedded && post._embedded['wp:featuredmedia'] && (
                  <img 
                    src={post._embedded['wp:featuredmedia'][0].source_url} 
                    className="card-img-top" 
                    alt={post.title.rendered} 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div className="card-text mb-3 flex-grow-1 text-muted" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <p className="small text-muted">
                    {new Date(post.date).toLocaleDateString("hr-HR", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                  <Link to={`/usluge/${post.id}`} className="btn btn-primary mt-auto">Saznaj više</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Masaze;

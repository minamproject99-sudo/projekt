import { useState, useEffect } from "react";

const Kontakt = () => {
  const [page, setPage] = useState(null);

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

  if (!page) return <p>Stranica nije pronađena.</p>;

  return (
    <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
  );
};

export default Kontakt;

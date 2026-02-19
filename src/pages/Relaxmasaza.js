import { useState, useEffect } from "react";


const Relaxmasaza = () => {

    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
const response = await fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/pages/1280?_embed');
if (!response.ok) {
throw new Error('Greška pri dohvatu stranice');
}

const data = await response.json();
setPage(data);
        } catch (error) {
            console.error('Greška pri dohvatu stranice:', error);
        }
    };

    fetchPage();
}, []);

if (!page) {
    return <div className="container">Učitavanje...</div>;
}


  return (
   <div dangerouslySetInnerHTML={{__html:page.content.rendered}}/>
  );
};

export default Relaxmasaza;

 
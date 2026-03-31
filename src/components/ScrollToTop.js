import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Vraća prozor na sami vrh (x: 0, y: 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Pokreće se svaki put kada se promijeni URL (pathname)

  return null; // Ova komponenta nema vizualni dio, samo radi u pozadini
};

export default ScrollToTop;

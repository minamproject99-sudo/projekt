import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'animate.css';
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";


import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Naslovnica from "./pages/Naslovnica";
import Masaze from "./pages/Masaze";
import KlasicnaMasaza from "./pages/Klasicnamasaza";
import SportskaMasaza from "./pages/Sportskamasaza";
import RelaxMasaza from "./pages/Relaxmasaza";
import Omeni from "./pages/Omeni";
import PoklonBon from "./pages/Poklonbon";
import Kontakt from "./pages/Kontakt";
import PocetnaVjezba from "./pages/PocetnaVjezba";





function App() {
  return (
   <BrowserRouter basename="/ncacic">


    <ScrollToTop /> 
      <Nav />

      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/omeni" element={<Omeni />} />
        <Route path="/masaze" element={<Masaze />} />
        <Route path="/klasicna-masaza" element={<KlasicnaMasaza />} />
        <Route path="/sportska-masaza" element={<SportskaMasaza />} />
        <Route path="/relax-masaza" element={<RelaxMasaza />} />
        <Route path="/o-meni" element={<Omeni />} />
        <Route path="/poklon-bon" element={<PoklonBon />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/pocetna-vjezba" element={<PocetnaVjezba />} />
      
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Naslovnica from "./pages/Naslovnica";
import Blog from "./pages/Blog";
import Profil from "./components/zadaci/Profil";
import Aromaterapija from "./pages/Aromaterapija";
import LjekovitiPripravci from "./pages/Ljekovitipripravci";
import KremeiMacerati from "./pages/Kremeimacerati";
import Masaze from "./pages/Masaze";
import KlasicnaMasaza from "./pages/Klasicnamasaza";
import SportskaMasaza from "./pages/Sportskamasaza";
import RelaxMasaza from "./pages/Relaxmasaza";
import Omeni from "./pages/Omeni";
import Meditacije from "./pages/Meditacije";
import Vipassana from "./pages/Vipassana";
import VipassanaYes from "./pages/Vipassanayes";
import PoklonBon from "./pages/Poklonbon";
import ParcijalnaMasaza from "./pages/Parcijalnamasaza";
import CijeloTijelo from "./pages/Cijelotijelo";
import Kontakt from "./pages/Kontakt";




function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Naslovnica />} />
        <Route path="/omeni" element={<Omeni />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/aromaterapija" element={<Aromaterapija />} />
        <Route path="/ljekoviti-pripravci" element={<LjekovitiPripravci />} />
        <Route path="/kreme-i-macerati" element={<KremeiMacerati />} />
        <Route path="/masaze" element={<Masaze />} />
        <Route path="/klasicna-masaza" element={<KlasicnaMasaza />} />
        <Route path="/sportska-masaza" element={<SportskaMasaza />} />
        <Route path="/relax-masaza" element={<RelaxMasaza />} />
        <Route path="/o-meni" element={<Omeni />} />
        <Route path="/meditacije" element={<Meditacije />} />
        <Route path="/buddha-vipassana" element={<Vipassana />} />
        <Route path="/buddha-vipassana-saying-yes" element={<VipassanaYes />} />
        <Route path="/poklon-bon" element={<PoklonBon />} />
        <Route path="/parcijalna-masaza" element={<ParcijalnaMasaza />} />
        <Route path="/masaza-cijelog-tijela" element={<CijeloTijelo />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

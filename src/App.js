import { BrowserRouter, Routes, Route } from "react-router";
import React from 'react';
import './App.css';
import Nav  from "./components/Nav";
import Footer  from "./components/Footer";
import Home from "./pages/Home";
import Blog from './pages/Blog';  

function App() {
  return (
 <BrowserRouter>
     <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
      <Footer />
  </BrowserRouter> 
  );
};

export default App;

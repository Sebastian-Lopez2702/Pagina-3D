import React from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import "../styles/pages/HomePage.css";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <div className="full-height">
        <img
          src="..\img\diseno1.png"
          className="background-img"
          alt="imagen de fondo"
        />
        <h2 id="primer-texto">Todo lo que imagines</h2>
        <h1 id="segundo-texto">se puede HACER</h1>
      </div>

      <Footer />
    </div>
  );
}

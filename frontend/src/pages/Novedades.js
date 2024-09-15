import React from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import "../styles/pages/Novedades.css";

export default function Novedades() {
  return (
    <div>
      <Nav />
      <div class="contenedor-novedades">
        <div class="novedad">
          <img src="..\img\filamentos.jpg" alt="imagen de filamentos" />
          <h3>Nuevos tipos de filamentos disponibles</h3>
          <p>
            ¡Hemos ampliado nuestra oferta de filamentos! Ahora puedes elegir
            entre una variedad aún mayor de materiales, incluyendo filamentos de
            metal y carbono.
          </p>
        </div>
        <div class="divisor"></div>
        <div class="novedad">
          <img
            src="..\img\impresoras.jpg"
            alt="imagen de nuevas impresoras 3D"
          />
          <h3>¡Nuevas impresoras 3D en nuestro catálogo!</h3>
          <p>
            Nos complace anunciar la incorporación de nuevas impresoras 3D de
            última generación. Estas impresoras ofrecen mayor precisión,
            velocidad y versatilidad para tus proyectos, permitiéndote llevar
            tus ideas al siguiente nivel.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import "../styles/pages/Contacto.css";

export default function Contacto() {
  return (
    <div>
      <Nav />
      <div class="contenedor">
        <h2>Contacto</h2>
        <form>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />

          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label for="telefono">Número de Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />

          <label for="descripcion">Descripción del Producto:</label>
          <textarea id="descripcion" name="descripcion" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import "../../styles/layout/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div id="superior-footer">
          <p id="condiciones">
            2024 Dimensión 3D S.R.L. Condiciones y Politicas de privacidad
          </p>
        </div>
        <div id="inferior-footer">
          <p id="ficticio">
            *Todo el contenido es ficticio <i className="fa-solid fa-cubes"></i>
          </p>
        </div>
      </footer>
    </div>
  );
}

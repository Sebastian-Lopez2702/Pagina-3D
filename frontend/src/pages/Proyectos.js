import React from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import "../styles/pages/Proyectos.css";

export default function Proyectos() {
  return (
    <div>
      <Nav />
      <div class="contenedor-proyectos">
        <div class="proyecto">
          <img src="..\img\yoda.jpg" alt="Proyecto 1" />
          <p>
            "La figura de Yoda es impresionante. Los detalles son nítidos y la
            calidad de la impresión 3D es excepcional. Se ha convertido en la
            pieza favorita de mi colección de Star Wars."
          </p>
        </div>
        <div class="proyecto">
          <img src="..\img\porta-tablet.png" alt="Proyecto 2" width="70%" />
          <p>
            "El porta tablet es súper práctico, resistente y encaja
            perfectamente con mi dispositivo"
          </p>
        </div>
        <div class="proyecto">
          <img src="..\img\pokemon.jpg" alt="Proyecto 3" />
          <p>
            "Las figuras de Pokémon son adorables y están perfectamente
            impresas. Cada detalle está capturado con precisión, lo que las hace
            ideales para cualquier fan de la serie"
          </p>
        </div>
        <div class="proyecto">
          <img src="..\img\mascaras.jpg" alt="Proyecto 3" />
          <p>
            "Las máscaras de Halloween son aterradoramente realistas. El acabado
            es excelente, y la comodidad al usarlas es sorprendente."
          </p>
        </div>
        <div class="proyecto">
          <img src="..\img\figura.jpg" alt="Proyecto 3" />
          <p>
            "La figura geométrica es una obra de arte moderna. Su diseño es
            elegante y minimalista."
          </p>
        </div>
        <div class="proyecto">
          <img src="..\img\figuras.jpg" alt="Proyecto 3" />
          <p>
            "Las figuras están increíblemente bien hechas. Los detalles en las
            armaduras y armas son sorprendentes."
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

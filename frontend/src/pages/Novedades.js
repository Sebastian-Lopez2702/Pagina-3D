import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import NovedadItem from "../components/novedades/NovedadItem";

import "../styles/pages/Novedades.css";

export default function Novedades() {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/novedades");
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);

  return (
    <div>
      <Nav />
      <div className="contenedor-novedades">
        {loading ? (
          <p>Cargando novedades...</p>
        ) : (
          novedades.map((novedad, index) => (
            <div key={novedad.id} className="novedad-contenedor">
              <NovedadItem
                title={novedad.titulo}
                image={novedad.imagen}
                content={novedad.cuerpo}
              />
              {index < novedades.length - 1 && <div className="divisor"></div>}
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}
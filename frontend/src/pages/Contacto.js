import React, { useState } from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import axios from "axios";

import "../styles/pages/Contacto.css";

const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    descripcion: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(null); // Estado correcto para errores
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError(null);
    setSending(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contacto",
        formData
      );
      setMsg(response.data.mensaje);
      if (response.data.error === false) {
        setFormData(initialForm);
      }
    } catch (err) {
      setError("Ha ocurrido un problema al enviar el formulario");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <Nav />
      <div className="contenedor">
        <h2>Contacto</h2>

        {sending && (
          <div className="alert alert-info mt-3 d-flex align-items-center gap-2" role="alert">
            <i className="fa-solid fa-paper-plane"></i>
            <p className="m-0 text-center">Enviando...</p>
          </div>
        )}

        {msg && (
          <div className="alert alert-success mt-3 d-flex align-items-center gap-2" role="alert">
            <i className="fa-solid fa-paper-plane"></i>
            <p className="m-0 text-center">{msg}</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger mt-3 d-flex align-items-center gap-2" role="alert">
            <p className="m-0 text-center">{error}</p>
          </div>
        )}

        <form action="/contacto" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefono">Número de teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <label htmlFor="descripcion">
            Descripción del producto a diseñar:
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary mt-3">
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
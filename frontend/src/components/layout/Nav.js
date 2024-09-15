import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layout/Nav.css";

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="img-nombre">
          <img src="..\img\logo.png" alt="logo" />
          <h2>Dimensión 3D</h2>
        </div>
        <div className="secciones">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activo" : undefined)}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? "activo" : undefined)}>
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/novedades"
                className={({ isActive }) => (isActive ? "activo" : undefined)}>
                Novedades
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proyectos"
                className={({ isActive }) => (isActive ? "activo" : undefined)}>
                Proyectos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

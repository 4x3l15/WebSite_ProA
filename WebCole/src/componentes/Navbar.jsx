import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar-custom">
      <span className="navbar-brand">Website PROA</span>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/tareas">Tareas</Link>
        <Link to="/login">Iniciar sesión</Link>
      </div>
    </nav>
  );
}

export default Navbar;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { usuario, setUsuario } = useContext(UserContext);

  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem("token"); // limpiar token al cerrar sesión
  };

  return (
    <nav className="navbar-custom">
      <span className="navbar-brand">Website PROA</span>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/tareas">Novedades</Link>
        <Link to="/ubicacion">Ubicación</Link>
        <Link to="/calendario">Calendario</Link>

        {usuario ? (
          <button onClick={handleLogout} className="nav-links-btn btn-cerrar">
            Cerrar sesión
          </button>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

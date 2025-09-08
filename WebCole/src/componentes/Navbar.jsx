import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar-custom">
      <span className="navbar-brand">Website PROA</span>
      <div className="nav-links">
        <a href="#">Calendario</a>
        <a href="#">Ubicación</a>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar-custom">
      <a className="navbar-brand" href="#">
        Website PROA
      </a>
      <a href="#" role="button" >
          Calendario
      </a>
      <a href="#" role="button" >
          Ubicacion
      </a>
    </nav>
  );
}

export default Navbar;

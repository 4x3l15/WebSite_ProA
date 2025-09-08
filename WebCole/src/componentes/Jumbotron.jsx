import React from "react";
import "../App.css";
import Info from "./Info";

function Jumbotron() {
  return (
    <header className="jumbotron">
      <div className="jumbotron-container">
        <h1>Bienvenido a Website PROA</h1>
        <p>Tu espacio de aprendizaje y tecnología</p>
        <Info />
      </div>
    </header>
  );
}

export default Jumbotron;

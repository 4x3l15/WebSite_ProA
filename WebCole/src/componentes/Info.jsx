import React, { useState } from "react";
import "./Info.css";
import "../App.css"; 
import Carrusel from "./Carrusel"

function Info() {
  const [open, setOpen] = useState(false);

  return (
    <section className="info-fondo">
      <div className="info-caja">
        <h2 className="info-titulo">¿Quiénes Somos?</h2>
        <button
          onClick={() => setOpen(true)}
          className="info-boton"
        >
          Conocer más sobre nosotros
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="info-overlay">
          <div className="info-modal">
            <h3 className="info-modal-titulo">Más sobre nosotros</h3>
            <p className="info-modal-texto">
              Somos PROA
              <Carrusel/>
              Somos la Promo 2025 de la Escuela Experimental PROA Córdoba.
 Nuestra trayectoria comenzó en 2020, en plena pandemia, cuando la secundaria inició de manera virtual. Durante ese tiempo aprendimos a estudiar a distancia, a usar nuevas herramientas digitales y a mantenernos conectados a pesar de las dificultades.
Con el regreso a la presencialidad, fuimos consolidando el grupo, trabajando en proyectos, compartiendo aprendizajes y experiencias dentro y fuera del aula.
Hoy, en nuestro último año, nos definimos como una generación que supo adaptarse a los cambios y que construyó su identidad combinando lo virtual con lo presencial.

            </p>
            <button
              onClick={() => setOpen(false)}
              className="info-boton-cerrar"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Info;

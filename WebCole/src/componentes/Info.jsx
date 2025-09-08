import React, { useState } from "react";
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
              Somos PROA (agregar info)
              <Carrusel/>
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

import React from "react";
import "../App.css";

function Mapa() {
  return (
    <div className="mapa-section">
      <div className="container">
        <h1>Ubicación del colegio</h1>
        <iframe
          className="mapa-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.624115855054!2d-64.17135292532802!3d-31.424480796640957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2bdd269e4bb%3A0x67c4a7a652ff3aee!2zQWd1c3TDrW4gR2FyesOzbiAxMjIxLCBYNTAwMCBDw7NyZG9iYQ!5e0!3m2!1ses-419!2sar!4v1756737327526!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Colegio"
        ></iframe>
      </div>
    </div>
  );
}

export default Mapa;

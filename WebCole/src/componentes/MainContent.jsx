import React from "react";
import Calendario from "./Calendario";

function MainContent() {
  return (
    <main
      style={{
        background: "#93c5fd",       // Fondo celeste claro
        padding: "40px 20px",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            color: "#13265a",         // Azul fuerte para el título
            marginBottom: "10px"
          }}
        >
          Contenido principal
        </h2>

        <p
          style={{
            color: "#13265a",         // Azul cielo para texto secundario
            marginBottom: "30px"
          }}
        >
          Aquí puedes agregar tu contenido.
        </p>

        <Calendario />
      </div>
    </main>
  );
}

export default MainContent;

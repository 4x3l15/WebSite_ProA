import React from "react";
import Calendario from "./Calendario";

function MainContent() {
  return (
    <main
      style={{
        background: "#C7F5F3",       // Fondo celeste claro
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
            color: "#3176F5",         // Azul fuerte para el título
            marginBottom: "10px"
          }}
        >
          Contenido principal
        </h2>

        <p
          style={{
            color: "#88C5F4",         // Azul cielo para texto secundario
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

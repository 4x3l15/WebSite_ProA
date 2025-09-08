import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function MainContent() {
  const { usuario } = useContext(UserContext);

  return (
    <main className="main-content">
      <div className="main-box">
        <h2>Contenido principal</h2>
        {usuario ? (
          <p className="saludo">👋 Hola, {usuario}</p>
        ) : (
          <p className="texto-secundario">Aquí puedes agregar tu contenido.</p>
        )}
      </div>
    </main>
  );
}

export default MainContent;

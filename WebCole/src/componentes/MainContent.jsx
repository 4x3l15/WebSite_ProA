import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Jumbotron from "./Jumbotron";

function MainContent() {
  const { usuario } = useContext(UserContext);

  return (
    <main className="main-content">
      <div className="main-box">
        {usuario ? (
          <p className="saludo">👋 Hola, {usuario}</p>
        ) : (
          <p className="texto-secundario"></p>
        )}
        <Jumbotron/>
      </div>
    </main>
  );
}

export default MainContent;

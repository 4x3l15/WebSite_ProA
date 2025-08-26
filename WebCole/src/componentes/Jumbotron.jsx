import React from "react";

function Jumbotron() {
  return (
    <header style={{ background: "#A9F5CF", padding: "3rem 1rem", marginBottom: "2rem" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#3176F5", marginBottom: "1rem" }}>
          Bienvenido a Website PROA
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#3176F5", marginBottom: "2rem" }}>
          Este es un ejemplo de jumbotron usando Bootstrap 5 con utilidades en
          lugar de la clase antigua <code>.jumbotron</code>.
        </p>
        <a 
          href="#" 
          role="button"
          style={{
            backgroundColor: "#3176F5",
            color: "#FFFFFF",
            padding: "0.75rem 1.5rem",
            fontSize: "1.25rem",
            borderRadius: "0.3rem",
            textDecoration: "none",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#C7F5F3"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#3176F5"}
        >
          Comenzar
        </a>
      </div>
    </header>
  );
}

export default Jumbotron;

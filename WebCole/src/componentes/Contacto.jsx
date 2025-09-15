// src/componentes/Contacto.jsx
function Contacto() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff", // fondo blanco
        padding: "30px 25px",
        borderRadius: "20px",
        maxWidth: "900px", // mismo ancho que mapa
        margin: "20px auto",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        textAlign: "center",
        fontSize: "1.1rem",
        color: "#333",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      }}
    >
      <h2 style={{ color: "#1E3A8A", fontSize: "2rem", marginBottom: "15px" }}>
        Contacto
      </h2>
      <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>
        Teléfono: <strong>4348894</strong> (solo llamadas) <br />
        Email: <strong>cordobacentro.ds@escuelasproa.edu.ar</strong>
      </p>
    </section>
  );
}

export default Contacto;

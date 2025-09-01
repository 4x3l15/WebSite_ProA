import React, { useState } from "react";

function Info() {
  const [open, setOpen] = useState(false);

  
  const styles = {
    fondo: {
      background: "#93c5fd",
      color: "#1e3a8a",
      minHeight: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    caja: {
      background: "white",
      padding: "1.5rem",
      borderRadius: "1rem",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      maxWidth: "500px",
    },
    titulo: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#1d4ed8",
    },
    boton: {
      background: "#2563eb",
      color: "white",
      padding: "0.75rem 2rem",
      borderRadius: "9999px",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      transition: "all 0.2s ease-in-out",
    },
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
    },
    modal: {
      background: "#1e3a8a",
      padding: "2rem",
      borderRadius: "1rem",
      maxWidth: "400px",
      width: "100%",
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      animation: "fadeIn 0.3s ease-in-out",
    },
    modalTitulo: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#1d4ed8",
      marginBottom: "1rem",
    },
    modalTexto: {
      color: "#374151",
      marginBottom: "1.5rem",
      lineHeight: "1.6",
    },
    botonCerrar: {
      background: "#3b82f6",
      color: "white",
      padding: "0.5rem 1.5rem",
      borderRadius: "9999px",
      border: "none",
      fontWeight: "200",
      cursor: "pointer",
      transition: "background 0.2s",
    },
  };

  return (
    <section style={styles.fondo}>
      <div style={styles.caja}>
        <h2 style={styles.titulo}>¿Quiénes Somos?</h2>
        <button
          onClick={() => setOpen(true)}
          style={styles.boton}
          onMouseEnter={(e) => (e.target.style.background = "#1e40af")}
          onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
        >
          Conocer más sobre nosotros
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitulo}>Más sobre nosotros</h3>
            <p style={styles.modalTexto}>
              somos proa (agregar info)
            </p>
            <button
              onClick={() => setOpen(false)}
              style={styles.botonCerrar}
              onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.target.style.background = "#3b82f6")}
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

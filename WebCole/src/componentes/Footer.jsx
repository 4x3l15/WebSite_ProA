import React from "react";

function Footer() {
  return (
    <footer style={{ background: "#3176F5", color: "#ffffff", textAlign: "center", padding: "16px", marginTop: "40px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ marginBottom: "8px" }}>&copy; 2025 Website PROA. Todos los derechos reservados.</p>
        <a 
          href="#" 
          style={{ 
            color: "#ffffff", 
            textDecoration: "none", 
            margin: "0 8px" 
          }} 
          onMouseOver={(e) => e.target.style.color = "#C7F5F3"}
          onMouseOut={(e) => e.target.style.color = "#ffffff"}
        >
          Política de Privacidad
        </a>
        |
        <a 
          href="#" 
          style={{ 
            color: "#ffffff", 
            textDecoration: "none", 
            margin: "0 8px" 
          }} 
          onMouseOver={(e) => e.target.style.color = "#C7F5F3"}
          onMouseOut={(e) => e.target.style.color = "#ffffff"}
        >
          Términos y Condiciones
        </a>
      </div>
    </footer>
  );
}

export default Footer;

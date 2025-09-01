import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1a337a",
        padding: "10px 20px"
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center" }}>
        <a
          href="#"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.25rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img src={logo}
          alt="Logo"
          width="190"
          height="110"
          style={{ marginRight: "10px" }} />
          <h1>web site</h1>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

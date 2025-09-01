import React from "react";

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
          <img
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            style={{ marginRight: "10px" }}
          />
          website_proa
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

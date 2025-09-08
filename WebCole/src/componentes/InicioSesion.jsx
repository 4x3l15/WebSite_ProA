// src/componentes/InicioSesion.jsx
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function InicioSesion() {
  const { setUsuario } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modoRegistro, setModoRegistro] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url = modoRegistro ? "/api/auth/register" : "/api/auth/login";

    try {
      const res = await fetch("http://localhost:5000" + url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if (!modoRegistro) {
          setUsuario(data.username); // Guarda el usuario en el contexto
          navigate("/"); // Redirige al inicio
        } else {
          alert("Cuenta creada. Ahora inicia sesión.");
          setModoRegistro(false);
          setUsername("");
          setPassword("");
        }
      } else {
        setError(data.msg || "Ocurrió un error");
      }
    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="login-container">
      <h2>{modoRegistro ? "Crear cuenta" : "Iniciar sesión"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{modoRegistro ? "Registrarse" : "Ingresar"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={() => setModoRegistro(!modoRegistro)}
        className="switch-btn"
      >
        {modoRegistro ? "Ya tengo cuenta" : "Crear una cuenta"}
      </button>
    </div>
  );
}

export default InicioSesion;

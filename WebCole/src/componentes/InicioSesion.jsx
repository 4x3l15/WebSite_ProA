// src/componentes/InicioSesion.jsx
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function InicioSesion() {
  const { usuario, setUsuario } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modoRegistro, setModoRegistro] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 👇 validamos que sea un Gmail
    if (!username.endsWith("@gmail.com")) {
      setError("Solo puedes usar una cuenta de Gmail.");
      return;
    }

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
          localStorage.setItem("token", data.token); // 👈 Guardamos el token
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

  const handleLogout = () => {
    setUsuario(null); // 👈 borramos el usuario del contexto
    localStorage.removeItem("token"); // 👈 borramos el token al cerrar sesión
    navigate("/iniciosesion"); // volvemos al login
  };

  // 👇 Si ya hay usuario logueado, mostramos el botón de cerrar sesión
  if (usuario) {
    return (
      <div className="login-container">
        <h2>Bienvenido, {usuario}</h2>
        <button onClick={handleLogout} className="switch-btn">
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>{modoRegistro ? "Crear cuenta" : "Iniciar sesión"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo (solo Gmail)"
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
        <button type="submit">
          {modoRegistro ? "Registrarse" : "Ingresar"}
        </button>
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

// src/componentes/Tareas.jsx
import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";

function Tareas() {
  const { usuario } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const token = localStorage.getItem("token"); // 👈 obtenemos token

  useEffect(() => {
    if (!token) return; // no cargar tareas si no hay token

    fetch("http://localhost:5000/api/items", {
      headers: { "x-auth-token": token },
    })
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => console.error("Error cargando tareas"));
  }, [token]);

  const agregarItem = async () => {
    if (!usuario) {
      alert("Debes iniciar sesión para agregar tareas.");
      return;
    }

    if (nombre.trim() === "" || descripcion.trim() === "") return;

    await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token, // enviamos token al backend
      },
      body: JSON.stringify({ nombre, descripcion }),
    });

    setNombre("");
    setDescripcion("");
    actualizarLista();
  };

  const actualizarLista = async () => {
    const nuevaLista = await fetch("http://localhost:5000/api/items", {
      headers: { "x-auth-token": token },
    }).then((res) => res.json());

    setItems(nuevaLista);
  };

  return (
    <main>
      <div className="tareas-container">
        <h2>Contenido principal</h2>
        <p>Aquí puedes agregar tu contenido.</p>

        <section>
          <h3 className="tareas-header">Lista de Ítems</h3>

          {usuario ? (
            <div className="tareas-inputs">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                type="text"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <button onClick={agregarItem}>Agregar</button>
            </div>
          ) : (
            <p>Inicia sesión para agregar tareas.</p>
          )}

          <ul className="tareas-list">
            {items.map((item) => (
              <li key={item._id}>
                <strong>{item.nombre}</strong> - {item.descripcion}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Tareas;

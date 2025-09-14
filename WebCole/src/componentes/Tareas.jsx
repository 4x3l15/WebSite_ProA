import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";

function Tareas() {
  const { usuario } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const token = localStorage.getItem("token");

  // Cargar tareas del usuario logueado
  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/api/items", {
      headers: { "x-auth-token": token },
    })
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => console.error("Error cargando tareas"));
  }, [token]);

  // Agregar tarea
  const agregarItem = async () => {
    if (!usuario) {
      alert("Debes iniciar sesión para agregar tareas.");
      return;
    }
    if (!nombre || !descripcion) return;

    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ nombre, descripcion }),
      });
      const data = await res.json();
      setItems([data, ...items]); // agregamos al principio
      setNombre("");
      setDescripcion("");
    } catch (err) {
      console.error("Error agregando tarea", err);
    }
  };

  // Eliminar tarea
  const eliminarItem = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/items/${id}`, {
        method: "DELETE",
        headers: { "x-auth-token": token },
      });
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error eliminando tarea", err);
    }
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
                {usuario && (
                  <button
                    onClick={() => eliminarItem(item._id)}
                    style={{
                      marginLeft: "10px",
                      background: "#e53935",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "2px 6px",
                      cursor: "pointer",
                    }}
                  >
                    Eliminar
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Tareas;

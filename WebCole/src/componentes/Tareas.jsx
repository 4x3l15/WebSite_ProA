import React, { useEffect, useState } from "react";
import "../App.css";

function Tareas() {
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const agregarItem = async () => {
    if (nombre.trim() === "" || descripcion.trim() === "") return;
    await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, descripcion }),
    });
    setNombre("");
    setDescripcion("");
    actualizarLista();
  };

  const actualizarLista = async () => {
    const nuevaLista = await fetch("http://localhost:5000/api/items").then((res) =>
      res.json()
    );
    setItems(nuevaLista);
  };

  return (
    <main>
      <div className="tareas-container">
        <h2>Contenido principal</h2>
        <p>Aquí puedes agregar tu contenido.</p>

        <section>
          <h3 className="tareas-header">Lista de Ítems</h3>
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

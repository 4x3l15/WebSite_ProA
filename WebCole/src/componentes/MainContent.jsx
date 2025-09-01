import React, { useEffect, useState } from "react";
import Calendario from "./Calendario";

function MainContent() {
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Cargar datos desde el backend
  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // Agregar nuevo item
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

  // Actualizar lista desde el backend
  const actualizarLista = async () => {
    const nuevaLista = await fetch("http://localhost:5000/api/items").then((res) =>
      res.json()
    );
    setItems(nuevaLista);
  };

  return (
    <main
      style={{
<<<<<<< HEAD
        background: "#93c5fd",       // Fondo celeste claro
=======
        background: "#C7F5F3", // Fondo celeste claro
>>>>>>> f10812dd984d3dca892a9800520891013404bff4
        padding: "40px 20px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
<<<<<<< HEAD
            color: "#13265a",         // Azul fuerte para el título
            marginBottom: "10px"
=======
            color: "#3176F5", // Azul fuerte para el título
            marginBottom: "10px",
>>>>>>> f10812dd984d3dca892a9800520891013404bff4
          }}
        >
          Contenido principal
        </h2>

        <p
          style={{
<<<<<<< HEAD
            color: "#13265a",         // Azul cielo para texto secundario
            marginBottom: "30px"
=======
            color: "#88C5F4", // Azul cielo para texto secundario
            marginBottom: "30px",
>>>>>>> f10812dd984d3dca892a9800520891013404bff4
          }}
        >
          Aquí puedes agregar tu contenido.
        </p>

        {/* Calendario */}
        <Calendario />

        {/* CRUD para Items */}
        <section
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#3176F5", marginBottom: "20px" }}>Lista de Ítems</h3>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <input
              type="text"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <button
              onClick={agregarItem}
              style={{
                background: "#3176F5",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Agregar
            </button>
          </div>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item) => (
              <li
                key={item._id}
                style={{
                  padding: "10px",
                  background: "#f1f1f1",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <strong>{item.nombre}</strong> - {item.descripcion}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default MainContent;


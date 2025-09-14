import { useEffect, useState } from "react";

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
    await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, descripcion }),
    });
    setNombre("");
    setDescripcion("");
    // Actualizar lista
    const nuevaLista = await fetch("http://localhost:5000/api/items").then(res => res.json());
    setItems(nuevaLista);
  };

  return (
    <div className="main-content">
      <h2>Lista de Ítems</h2>
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

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.nombre} - {item.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;

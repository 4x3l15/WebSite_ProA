import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext"; // importamos el contexto

function Tareas() {
  const { usuario } = useContext(UserContext); // obtenemos el usuario logeado
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const token = localStorage.getItem("token"); // token guardado al iniciar sesión

  // Cargar todas las tareas
  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error cargando comentarios:", err));
  }, []);

  const agregarItem = async () => {
    if (!usuario) {
      alert("Debes iniciar sesión para agregar comentarios.");
      return;
    }

    if (!nombre.trim() || !descripcion.trim()) return;

    try {
      await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token, // enviamos token para autenticar
        },
        body: JSON.stringify({ nombre, descripcion }),
      });

      setNombre("");
      setDescripcion("");

      // actualizar lista
      const nuevaLista = await fetch("http://localhost:5000/api/items").then(
        (res) => res.json()
      );
      setItems(nuevaLista);
    } catch (err) {
      console.error("Error agregando comentario:", err);
    }
  };

  return (
    <section className="tareas-container">
      <h2 className="tareas-header">
        Comentarios y novedades del colegio
      </h2>

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
          <button onClick={agregarItem}>Agregar comentario</button>
        </div>
      ) : (
        <p className="texto-secundario">Debes iniciar sesión para agregar comentarios.</p>
      )}

      <ul className="tareas-list">
        {items.map((item) => (
          <li key={item._id}>
            <strong>{item.nombre}</strong>: {item.descripcion}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tareas;

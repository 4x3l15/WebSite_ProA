import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";

function Novedades() {
  const { usuario } = useContext(UserContext);
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState("");

  const token = localStorage.getItem("token");

  // Cargar comentarios
  useEffect(() => {
    fetch("http://localhost:5000/api/comments")
      .then((res) => res.json())
      .then((data) => setComentarios(data))
      .catch(() => console.error("Error cargando comentarios"));
  }, []);

  // Agregar comentario
  const agregarComentario = async () => {
    if (!usuario) {
      alert("Debes iniciar sesión para comentar.");
      return;
    }
    if (texto.trim() === "") return;

    const res = await fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({ texto }),
    });

    if (res.ok) {
      const nuevo = await res.json();
      setComentarios([...comentarios, nuevo]);
      setTexto("");
    } else {
      alert("Error al publicar comentario");
    }
  };

  // Eliminar comentario
  const eliminarComentario = async (id) => {
    const confirm = window.confirm("¿Seguro que quieres borrar este comentario?");
    if (!confirm) return;

    const res = await fetch(`http://localhost:5000/api/comments/${id}`, {
      method: "DELETE",
      headers: { "x-auth-token": token },
    });

    if (res.ok) {
      setComentarios(comentarios.filter((c) => c._id !== id));
    } else {
      alert("Error al borrar comentario");
    }
  };

  return (
    <main className="novedades-container">
      <h2>Novedades</h2>

      <section className="comentarios-lista">
        {comentarios.length === 0 ? (
          <p>No hay comentarios aún.</p>
        ) : (
          comentarios.map((c) => (
            <div key={c._id} className="comentario">
              <strong>{c.usuario?.username || "Anónimo"}:</strong> {c.texto}
              <small> ({new Date(c.fecha).toLocaleString()})</small>

              {/* 👇 Solo mostrar botón borrar si el usuario actual es el dueño */}
              {usuario && c.usuario?.username === usuario && (
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarComentario(c._id)}
                >
                  Borrar
                </button>
              )}
            </div>
          ))
        )}
      </section>

      {usuario ? (
        <div className="comentario-form">
          <textarea
            placeholder="Escribe un comentario..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button onClick={agregarComentario}>Publicar</button>
        </div>
      ) : (
        <p>🔒 Inicia sesión para comentar.</p>
      )}
    </main>
  );
}

export default Novedades;

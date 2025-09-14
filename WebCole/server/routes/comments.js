import express from "express";
import Comment from "../models/comment.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// GET: traer todos los comentarios
router.get("/", async (req, res) => {
  try {
    const comentarios = await Comment.find().populate("usuario", "username");
    res.json(comentarios);
  } catch (err) {
    res.status(500).json({ msg: "Error al obtener comentarios" });
  }
});

// POST: crear comentario
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { texto } = req.body;
    if (!texto) return res.status(400).json({ msg: "El comentario no puede estar vacío" });

    const nuevoComentario = new Comment({
      texto,
      usuario: req.user.id,
    });

    await nuevoComentario.save();
    res.json(nuevoComentario);
  } catch (err) {
    res.status(500).json({ msg: "Error al crear comentario" });
  }
});

// DELETE: borrar comentario (solo el dueño)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const comentario = await Comment.findById(req.params.id);
    if (!comentario) return res.status(404).json({ msg: "Comentario no encontrado" });

    if (comentario.usuario.toString() !== req.user.id) {
      return res.status(403).json({ msg: "No autorizado para borrar este comentario" });
    }

    await comentario.deleteOne();
    res.json({ msg: "Comentario eliminado" });
  } catch (err) {
    res.status(500).json({ msg: "Error al borrar comentario" });
  }
});

export default router;

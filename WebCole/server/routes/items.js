import express from "express";
import Item from "../models/item.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET: tareas del usuario logueado
router.get("/", auth, async (req, res) => {
  try {
    const tareas = await Item.find({ usuario: req.user.username }); // usar username del token
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ msg: "Error al obtener tareas" });
  }
});

// POST: crear nueva tarea
router.post("/", auth, async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const nuevaTarea = new Item({
      nombre,
      descripcion,
      usuario: req.user.username, // asociamos la tarea al usuario
    });
    await nuevaTarea.save();
    res.json(nuevaTarea);
  } catch (err) {
    res.status(500).json({ msg: "Error al crear tarea" });
  }
});

// DELETE: eliminar tarea
router.delete("/:id", auth, async (req, res) => {
  try {
    const tarea = await Item.findById(req.params.id);
    if (!tarea) return res.status(404).json({ msg: "Tarea no encontrada" });
    if (tarea.usuario !== req.user.username)
      return res.status(403).json({ msg: "No puedes eliminar esta tarea" });

    await tarea.deleteOne();
    res.json({ msg: "Tarea eliminada" });
  } catch (err) {
    res.status(500).json({ msg: "Error eliminando tarea" });
  }
});

export default router;

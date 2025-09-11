import express from "express";
import Item from "../models/item.js";
import authMiddleware from "../middleware/auth.js"; // middleware que valida token y pone req.user

const router = express.Router();

// GET: obtener tareas del usuario logueado
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tareas = await Item.find({ usuario: req.user.id }); // solo tareas del usuario
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ msg: "Error al obtener tareas" });
  }
});

// POST: crear nueva tarea para el usuario logueado
router.post("/", authMiddleware, async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const nuevaTarea = new Item({
      nombre,
      descripcion,
      usuario: req.user.id,
    });
    await nuevaTarea.save();
    res.json(nuevaTarea);
  } catch (err) {
    res.status(500).json({ msg: "Error al crear tarea" });
  }
});

export default router;

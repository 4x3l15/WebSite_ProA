import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

// Crear un ítem
router.post("/", async (req, res) => {
  try {
    const nuevoItem = new Item(req.body);
    await nuevoItem.save();
    res.json({ mensaje: "✅ Item guardado" });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el item" });
  }
});

// Obtener todos los ítems
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los ítems" });
  }
});

export default router;

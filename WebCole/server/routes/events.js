import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Obtener todos los eventos
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener eventos" });
  }
});

// Crear un nuevo evento
router.post("/", async (req, res) => {
  try {
    const { title, date } = req.body;
    const newEvent = new Event({ title, date });
    await newEvent.save();
    res.json(newEvent);
  } catch (err) {
    res.status(500).json({ error: "Error al guardar evento" });
  }
});

export default router;

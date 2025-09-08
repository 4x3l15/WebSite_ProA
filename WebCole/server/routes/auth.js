// routes/auth.js
import express from "express";
import User from "../models/User.js"; // Asegurate de tener el modelo User
import bcrypt from "bcryptjs";

const router = express.Router();

// Registro de usuario
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ msg: "Usuario ya existe" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: "Usuario creado correctamente" });
  } catch (err) {
    res.status(500).json({ msg: "Error del servidor", error: err.message });
  }
});

// Login de usuario
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Contraseña incorrecta" });

    res.status(200).json({ msg: "Login exitoso", username: user.username });
  } catch (err) {
    res.status(500).json({ msg: "Error del servidor", error: err.message });
  }
});

export default router;

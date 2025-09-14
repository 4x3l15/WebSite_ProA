import jwt from "jsonwebtoken";

export default function (req, res, next) {
  // 📌 Leer el token desde el header
  const token = req.header("x-auth-token");

  // Si no hay token → no autorizado
  if (!token) {
    return res.status(401).json({ msg: "No hay token, permiso no válido" });
  }

  try {
    // 📌 Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded.usuario; // guarda el id del usuario en req.usuario
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token no válido" });
  }
}

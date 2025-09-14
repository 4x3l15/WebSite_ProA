import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ msg: "No hay token, autorización denegada" });

  try {
    const decoded = jwt.verify(token, "secreto123"); // mismo secreto que en auth.js
    req.user = decoded.id; // id del usuario
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token no válido" });
  }
};

export default authMiddleware;

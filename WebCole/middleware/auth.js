import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ msg: "No hay token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // req.user.id estará disponible
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token no válido" });
  }
}


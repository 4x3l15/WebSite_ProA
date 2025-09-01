import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemsRoutes from "./routes/items.js";

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose.connect("mongodb+srv://mayra:2007@cluster0.1vf4jed.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB Atlas"))
.catch((err) => console.error("❌ Error de conexión:", err));

// Usar las rutas
app.use("/api/items", itemsRoutes);

// Puerto
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

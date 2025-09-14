import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

export default mongoose.model("Item", itemSchema);


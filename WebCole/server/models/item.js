import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  usuario: { type: String, required: true }, // guardar el username o userId
});

export default mongoose.model("Item", ItemSchema);

import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // referencia al usuario
});

export default mongoose.model("Item", ItemSchema);

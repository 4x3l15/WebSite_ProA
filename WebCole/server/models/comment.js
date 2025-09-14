import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  texto: { type: String, required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  fecha: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", commentSchema);

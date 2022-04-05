import mongoose from "mongoose";

/**
 * * Note Schema
 */
const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

/**
 * * Note model
 */
const Note = mongoose.model("Note", noteSchema);

export default Note;

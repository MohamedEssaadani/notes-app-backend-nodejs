import expressAsyncHandler from "express-async-handler";
import Note from "../models/note.js";

/**
 * @desc GET Notes
 * @route GET /api/notes
 * @access public
 */
export const getAllNotes = expressAsyncHandler(async (req, res) => {
  const notes = Note.find({});
  res.json(notes);
});

/**
 * @desc POST Notes
 * @route POST /api/notes
 * @access public
 */
export const createNote = expressAsyncHandler(async (req, res) => {
  const createdNote = Note.create(req.body);
  res.status(201).json(createdNote);
});

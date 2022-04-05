import express from "express";
import { createNote, getAllNotes } from "../controllers/noteController.js";

const router = express.Router();

router.route("/").get(getAllNotes).post(createNote);

export default router;

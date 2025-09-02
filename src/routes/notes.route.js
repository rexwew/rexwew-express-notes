import express from "express";
import { createNote, viewNote, updateNote } from "../controller/notes.controller.js";

const router = express.Router();


router.post("/create", createNote);
router.get("/view/:id", viewNote);
router.put("/update/:id", updateNote);

export default router;

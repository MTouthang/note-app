const express = require("express");
const router = express.Router();

const {
  getNoteId,
  createNotes,
  findAllNotes,
  getNote,
  updateNote,
  deleteNote,
} = require("../controllers/Notes");

// Params middle ware --
router.param("noteId", getNoteId);

// Routes
router.post("/note", createNotes);
router.get("/notes", findAllNotes);
router.get("/note/:noteId", getNote);
router.put("/note/:noteId", updateNote);
router.delete("/note/:noteId", deleteNote);

module.exports = router;

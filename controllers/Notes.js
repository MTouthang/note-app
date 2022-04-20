const express = require("express");
const Notes = require("../models/Notes");

// create notes ---
exports.createNotes = (req, res) => {
  const notes = new Notes(req.body);
  notes.save((err, notes) => {
    if (err) {
      return res.status(400).json({
        error: "Notes not save",
      });
    }
    res.json({ notes });
  });
};

// get all notes--
exports.findAllNotes = (req, res) => {
  Notes.find((err, notes) => {
    if (err) {
      return res.status(400).json({
        error: "Notes not available",
      });
    }
    res.json({ notes });
  });
};

// get notes by id--
exports.getNoteId = (req, res, next, id) => {
  Notes.findById(id).exec((err, note) => {
    if (err) {
      return res.status(400).json({
        error: "No note was found in DB",
      });
    }
    req.note = note;
    next();
  });
};

// get specific note
exports.getNote = (req, res) => {
  return res.json(req.note);
};

// update note
exports.updateNote = (req, res) => {
  Notes.findByIdAndUpdate(
    { _id: req.note._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, note) => {
      if (err) {
        return res.status(400).json({
          error: "selected note not deleted",
        });
      }
      res.json(note);
    }
  );
};

exports.deleteNote = (req, res) => {
  Notes.findByIdAndDelete(
    {
      _id: req.note._id,
    },
    (err, note) => {
      if (err) {
        return res.status(400).json({
          error: "selected note not deleted",
        });
      }
      res.json(note);
    }
  );
};

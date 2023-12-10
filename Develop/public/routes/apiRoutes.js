// install express.js
const express = require('express');
const router = express.Router();

// Placeholder for the database (in this case, a simple JSON file)
let notes = require('./db/db.json');

// Route to get all notes
router.get('/notes', (req, res) => {
  res.json(notes);
});

// Route to add a new note
router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = {
    id: notes.length + 1, 
    title,
    text
  };
  notes.push(newNote);

  res.json(newNote);
});

// Route to delete a note by ID
router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  notes = notes.filter(note => note.id !== parseInt(id));

  res.json({ message: 'Note deleted' });
});


module.exports = router;

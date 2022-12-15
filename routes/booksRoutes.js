const express = require('express');
const router = express.Router();
const booksController = require('./../controllers/booksController');

router.route('/').get(async (req, res) => {
  try {
    const books = await booksController.getAllBooks();
    res.status(200).json({
      status: 'success',
      data: books,
    });
  } catch (err) {
    console.error(err);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const id = req.params.id;
    const book = await booksController.getById(id);
    res.status(200).json({
      status: 'success',
      data: book,
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

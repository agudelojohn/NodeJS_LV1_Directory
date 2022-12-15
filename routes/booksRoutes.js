const express = require('express');
const router = express.Router();
const booksController = require('./../controllers/booksController');

router.route('/').get(booksController.getAllBooks);

router.route('/:id').get(booksController.getById);

module.exports = router;

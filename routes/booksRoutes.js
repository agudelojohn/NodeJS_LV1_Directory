const express = require('express');
const router = express.Router();
const booksController = require('./../controllers/booksController');

router.route('/').get(booksController.getAllBooks).post(booksController.create);

router
  .route('/:id')
  .get(booksController.getById)
  .patch(booksController.updateById)
  .delete(booksController.deleteById);

module.exports = router;

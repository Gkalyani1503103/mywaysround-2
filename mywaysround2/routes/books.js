const express = require('express');

const booksController = require('../controllers/books');


const router = express.Router();

router.post('/',booksController.postBook);

router.get('/',booksController.getBooks);

router.get('/:bookId',bookController.getBook);

router.put('/:bookId,booksController.putBook');

router.delete('/:bookId',booksController.deleteBook);

module.exports = router;

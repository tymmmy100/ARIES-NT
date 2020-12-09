'use strict'

const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/books',
    booksController.getBooks,
    booksController.responseToJson('books')
);

router.get('/booksByAuthor/:author',
    booksController.getBooksByAuthor,
    booksController.responseToJson('books')
);

router.post('/books',
    booksController.getBooks,
    booksController.createBook,
    booksController.responseToJson('addBook')
);

router.post('/deleteById/:bookId',
    booksController.deleteBookByID,
    booksController.responseToJson('books')
);

module.exports = router;
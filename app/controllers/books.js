'use strict'

const Book = require('../models/books');

module.exports = {
    getBooks: getBooks,
    getBooksByAuthor: getBooksByAuthor,
    deleteBookByID: deleteBookByID,
    createBook: createBook,
    responseToJson: responseToJson
};

function getBooks(req, res, next) {
     Book.find()
        .populate('user', 'name documents.docType')
         .sort({author: -1})
        .exec(function(err, result) {
        if (err) {
            console.log(err);
            return  res.json(err);
        }

        req.resources.books = result;
        return next();
    })
}

function getBooksByAuthor(req, res, next) {
    Book.find({author: req.params.author}, function(err, result) {
        if (err) {
            return res.json(err);
        }

        req.resources.books = result;
        return next();
    })
}

function deleteBookByID(req, res, next) {
    Book.deleteOne({_id: req.params.bookId}, function(err, result) {
        if (err) {
            return  res.json(err);
        }

        req.resources.books = result;
        return next();
    })
}

function createBook(req, res, next) {
    const book = new Book(req.body);

    book.save(function(err, result) {
        if (err) {
            console.log('error', err);
        }

        req.resources.addBook = result;
        return next();
    })
}

function responseToJson(prop) {
    return function(req, res, next) {
        return res.json(req.resources[prop]);
    };
}


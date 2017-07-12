const queries = require('../db/queries');
const express = require('express');
const router = express.Router();

router.get('/books', (req,res,next) => {
  queries.getAllBooks().then(books => {
    res.json(books);
  });
});
router.get('/books/:id', (req,res,next) => {
  queries.getBookById(req.params.id).then(book => {
    res.json(book);
  })
})
router.post('/books/new', (req,res,next) => {
  queries.createBook(req.body).then(response => {
    res.json(response);
  });
});
router.delete('/books/:id/delete', (req,res,next) => {
  queries.deleteBook(req.params.id).then(response => {
    res.json(response);
  });
});
router.put('/books/:id/edit', (req,res,next) => {
  queries.editBook(req.params.id, req.body).then(book => {
    res.json(book[0]);
  })
})

module.exports = router;

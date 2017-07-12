const queries = require('../db/queries');
const express = require('express');
const router = express.Router();

router.get('/books', (req,res,next) => {
  queries.getAllBooks().then(books => {
    res.json(books);
  });
});
router.post('/books/new', (req,res,next) => {
  queries.createBook(req.body).then(response => {
    res.json(response);
  });
});

module.exports = router;

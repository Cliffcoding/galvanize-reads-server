const queries = require('../db/queries');
const express = require('express');

router.get('/books', (req,res,next) => {
  queries.getAllBooks().then(books => {
    res.json(books);
  })
})

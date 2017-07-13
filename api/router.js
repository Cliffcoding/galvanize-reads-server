const queries = require('../db/queries');
const express = require('express');
const router = express.Router();
const booksAuthors = (books, res) => {
    const booksWithAuthors = []
    const bookByTitle = {}
    books.forEach(book => {
        if (!bookByTitle[book.title]) {
            const bookWithAuthors = {
                id: book.book_id,
                title: book.title,
                genre: book.genre,
                description: book.description,
                cover_url: book.cover_url,
                authors: []
            }
            booksWithAuthors.push(bookWithAuthors)
            bookByTitle[book.title] = bookWithAuthors;
        }
        bookByTitle[book.title].authors.push({
          author_id: book.author_id,
          first_name: book.first_name,
          last_name: book.last_name,
          biography: book.biography,
          portrait_url: book.portrait_url
        })
    })
    res.json(booksWithAuthors)
}


router.get('/books', (req,res,next) => {
  queries.getAllBooks().then(books => {
    booksAuthors(books, res)
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

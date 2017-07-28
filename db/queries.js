const knex = require('./knex');

module.exports = {
  getAllBooks() {
    return knex('book_author')
    .innerJoin('author', 'book_author.author_id', '=', 'author.id')
    .innerJoin('book', 'book_author.book_id', '=', 'book.id')
  },
  getBookAuthors() {
    return knex('book_author')
  },
  getBookById(id) {
    return knex('book').where('id', id).first();
  },
  createBook(book) {
    return knex('book').insert(book, '*');
  },
  deleteBook(id) {
    return knex('book').where('id', id).del();
  },
  editBook(id, books) {
    return knex('book').where('id', id).update(books, '*')
  },
  getAllAuthors() {
    return knex('author')
  }
}


// return knex('book_author')
//   .then((bookAuthors) => {
//     bookAuthors.map(book => {
//       return knex('book')
//       .where('book.id', book.book_id)
//       .then(eachBook => {
//          bookAuthors.book = eachBook;
//       })
//     })
//   }).then(authors => {
//     console.log(authors);
//   })

// return knex('project')
// 			.where('id', id)
// 			.first()
// 			.then(project => {
// 				return knex('grouping')
// 					.where('project_id', id)
// 					.then(groupings => {
// 						project.groupings = groupings;
// 						return project;
// 					})

// getAuthorsWithBooks: function() {
//     return knex.raw(
//       'SELECT authors.*, ' +
//       'array_to_json(array_agg(ROW( ' +
//       'books.id, books.title) ' +
//       ')) AS books ' +
//       'FROM authors ' +
//       'LEFT JOIN author_book ON authors.id = author_book.author_id ' +
//       'LEFT JOIN books ON author_book.book_id = books.id ' +
//       'GROUP BY authors.id ' +
//       'ORDER BY created_at DESC'
//     );
//   }

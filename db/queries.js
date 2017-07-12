const knex = require('./knex');

module.exports = {
  getAllBooks() {
    return knex('book')
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
  }
}

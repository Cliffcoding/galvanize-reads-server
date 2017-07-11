const books_authors = require('./seed-data/books_authors')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE book_author RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('book_author').insert(books_authors);
    });
};

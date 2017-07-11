const books = require('./seed-data/books')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE book RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('book').insert(books);
    });
};

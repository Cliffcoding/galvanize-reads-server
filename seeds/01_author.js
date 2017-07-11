const authors = require('./seed-data/authors')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE author RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('author').insert(authors);
    });
};

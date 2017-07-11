const knex = require('./knex');

module.exports = {
  getAllBooks() {
    return knex('book')
  }
}

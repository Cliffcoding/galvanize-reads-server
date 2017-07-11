
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('genre');
    table.text('description');
    table.string('cover_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book');
};

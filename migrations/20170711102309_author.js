
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', (table) => {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.text('biography');
    table.string('portrait_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author');
};

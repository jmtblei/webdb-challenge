
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl
        .increments()
        .unique();
      tbl
        .string('name', 128)
        .notNullable();
      tbl
        .string('description', 400)
        .notNullable();
      tbl
        .boolean('completed')
        .notNullable();
  })
  .createTable('actions', tbl => {
      tbl
        .increments()
        .unique();
      tbl
        .string('description', 400)
        .notNullable();
      tbl
        .string('notes');
      tbl
        .boolean('completed');
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions')
};

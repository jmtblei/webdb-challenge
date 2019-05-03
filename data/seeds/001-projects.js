
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'build computer', description: 'build a new computer', completed: 'false'},
        {name: 'assemble cube', description: 'make a new themed cube', completed: 'true'},
        {name: 'pimp my ride', description: 'install new sound system', completed: 'false'}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: "buy parts", notes: 'remember to mail in rebates', project_id: 1, completed: false},
        {description: "this will be a themed cube", notes: 'go through collection', project_id: 2, completed: true},
        {description: "call up xzibit", notes: 'maximize bass', project_id: 3, completed: false}
      ]);
    });
};

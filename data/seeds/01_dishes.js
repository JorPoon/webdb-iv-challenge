
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').insert([
        { name: 'Curry Chicken'},
        { name: 'Fried Chicken'},
        { name: 'Braised PorkBelly'}
      ]);
    
};

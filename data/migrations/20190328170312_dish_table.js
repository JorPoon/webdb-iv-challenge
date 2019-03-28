// dish table for recipeBook database.
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        //primary key (auto increments)
        tbl.increment();

        //names of the dishes - required - must be different
        tbl
         .string('name', 128)
         .notNullable()
         .unique();
    })
  
};

// undo changes from up function
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};

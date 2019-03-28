// dish table for recipeBook database.
exports.up = function(knex, Promise) {
    return knex.schema
    
    .createTable('dishes', function(tbl) {
        //primary key (auto increments)
        tbl.increments();

        //names of the dishes - required - must be different
        tbl
         .string('name', 128)
         .notNullable()
         .unique();
    })
    .createTable('recipes', tbl => {
        //must be created after dishes table
        //primary key
        tbl.increments();

        tbl
         .string('name', 128)
         .notNullable()
         .unique;
        
        //connect to dish table 
        tbl
         .integer('dish_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('dishes')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
    })
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl
         .string('name', 128)
         .notNullable()
         .unique();

        tbl
         .integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')

    })
    // .createTable('recipes_ingredients', tbl => {
    //     tbl.
    // })

  
};

// undo changes from up function
exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('dishes')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients');
};

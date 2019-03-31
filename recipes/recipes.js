const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    addRecipe,
    // getDishById,
    // getRecipes,
    // addRecipe
}

function getRecipes() {
    return db('recipes');
}

// function getDishById(id) {
//     return db('dishes')
//         .where({id})
//         .first();
// }

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(ids => {
            // return getDishById(ids[0]);
            return ids[0];
        });
}
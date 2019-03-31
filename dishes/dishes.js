const db = require('../data/dbConfig.js');

module.exports = {
    getDishes,
    addDish,
    getDishById,
    // getRecipes,
    // addRecipe
}

function getDishes() {
    return db('dishes');
}

function getDishById(id) {
    return db('dishes')
        .where({id})
        .first();
}

function addDish(dish) {
    return db('dishes')
        .insert(dish)
        .then(ids => {
            return getDishById(ids[0]);
        });
}
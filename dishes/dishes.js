const db = require('../data/dbConfig.js');

module.exports = {
    getDishes
    // addDish,
    // getDishById,
    // getRecipes,
    // addRecipe
}

function getDishes() {
    return db('dishes');
}
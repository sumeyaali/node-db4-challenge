const db = require('../Recipes/db-config.js');

//Above the fold
module.exports = {
    getRecipes,
    getIngredients,
    // findById,
    // findSteps,
    // add,
    // update,
    // remove
}

function getRecipes () {
    return db.select('*').from('Recipe')
}

function getIngredients () {
    return db.select('*').from('Ingredients')
}


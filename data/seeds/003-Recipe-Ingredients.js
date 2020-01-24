
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe-Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe-Ingredients').insert([
        {RecipeId: 1, IngredientId: 1, Quantity: 4},
        {RecipeId: 2, IngredientId: 2, Quantity: 2},
        {RecipeId: 3, IngredientId: 3, Quantity: 1}
      ]);
    });
};


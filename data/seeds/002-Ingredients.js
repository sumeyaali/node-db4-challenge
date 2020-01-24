
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {IngredientName: "Olive Oil, Eggs, Black Beans" , Measurements: "2 tablespoons of Olive Oil, 4 Eggs, 1 (15 ounce) can black beans, drained and rinsed "},
        {IngredientName: "Frozen Blueberries, Banana, Water, Cashew Butter, vanilla extract", 
        Measurements: "1 cup frozen blueberries, ½ banana,2 tablespoons water,1 tablespoon cashew butter, 1 teaspoon vanilla extract "},
        {IngredientName: "Eggs, Tomato, Green Onion, Bell Pepper, Cheddar Cheese",
         Measurements: "2	large EGGS,1 Tbsp.	tomato, chopped, 1 Tbsp.	green onion, chopped, 1 Tbsp.	bell pepper, chopped, 1 Tbsp.	Cheddar cheese "}
      ]);
    });
};

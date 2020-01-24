
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe').insert([
        {Name: "Black Bean Breakfast Bowl", 
        Instructions: 
        "Heat olive oil in a small pan over medium heat. Cook and stir eggs until eggs are set, 3 to 5 minutes.Place black beans in a microwave-safe bowl. Heat on High in the microwave until warm, about 1 minute. Divide warmed black beans between two bowls. Top each bowl with scrambled eggs, avocado, and salsa. Season with salt and black pepper"},

        {Name: "Blueberry Smoothie Bowl", 
        Instructions: 
        "Blend blueberries, 1/2 banana, water, cashew butter, and vanilla extract together in a blender until smooth; pour into a bowl. Top smoothie with sliced banana, almonds, and coconut."},

        {Name: "Scrambled Eggs With Tomato, Pepper, Onion & Cheese", 
        Instructions: 
        "BEAT eggs in small bowl until blended. COAT a small fry pan or skillet with nonstick spray or 1/2 Tbsp. butter. HEAT over medium-high heat until hot. ADD tomato, pepper and onion, and SAUTE for 1 minute or until tender. POUR eggs over mixture in pan. As the eggs begin to set, gently PULL the eggs across the pan to the center with a spatula. CONTINUE cooking – pulling, lifting and folding eggs – until thickened and no visible liquid remains. STIR in cheddar cheese. REMOVE from heat. SEASON with salt and pepper if desired. SERVE immediately."},

      ]);
    });
};

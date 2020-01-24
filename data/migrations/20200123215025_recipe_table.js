
exports.up = function(knex) {
  return knex.schema.createTable('Recipe', tbl => {
      tbl.increments()
      tbl.string('Name')
      tbl.text('Instructions')
  })
    .createTable('Ingredients', tbl => {
        tbl.increments()
        tbl.string('IngredientName')
        tbl.string('Measurements')
    })

    .createTable('Recipe-Ingredients', tbl => {
        tbl.increments()
        tbl.integer('RecipeId')
        tbl.integer('IngredientId')
        tbl.integer('Quantity')
    })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('Recipe')
  .dropTableIfExists('Ingredients')
};

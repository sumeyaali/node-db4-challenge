const express = require('express'); 

const Ingredients = require('./recipeModel');

const router = express.Router();


router.get('/', (req, res) => {
    Ingredients.getIngredients()
    .then(ingredients => {
        res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredients' });
    });
  });


  module.exports = router;
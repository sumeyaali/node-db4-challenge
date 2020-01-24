const express = require('express');

const recipeRouter = require('../Recipes/recipeRouter');
const ingredientsRouter = require('../Recipes/ingredientsRouter');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter)


module.exports = server;
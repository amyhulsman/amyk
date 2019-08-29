const express = require('express');

const router = express.Router();

const recipeController = require('./controllers/recipe.controller');

router.get('/', recipeController.listRecipes);
router.get('/:id', recipeController.recipeDetails);
router.post('/add', recipeController.addRecipe);
router.put('/:id/update', recipeController.updateRecipe);
router.delete('/:id/delete', recipeController.deleteRecipe);

module.exports - router;
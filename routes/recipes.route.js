const express = require('express');
const router = express.Router();

const recipesController = require('../public/javascripts/controllers/recipes.controller');

router.get('/', recipesController.listOfRecipes);
router.get('/load', recipesController.loadRecipes);
router.get('/add', recipesController.addRecipe);

module.exports = router;
var express = require('express');
var router = express.Router();
var recipesService = require('../public/javascripts/service/recipes.service');
var data = {
  title: "Mac and Cheese", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac scelerisque nunc, non rhoncus augue. Proin ex urna, pretium elementum fermentum sit amet, consectetur eget turpis. Donec posuere efficitur diam. Aenean a turpis at dui vulputate commodo quis et odio. Aliquam in lacus maximus, fermentum diam eu, sollicitudin tellus. Duis quis magna vel nibh tempor ornare. Vestibulum auctor arcu enim, in elementum purus tempus et. Sed metus magna, pulvinar ac arcu at, volutpat sagittis mi. Suspendisse ligula ex, commodo a viverra sit amet, maximus vel nisl. Suspendisse potenti. Vivamus mattis velit mauris, id venenatis sapien iaculis at. Vestibulum sit amet ligula at risus imperdiet auctor vel eget leo. Nulla dapibus ligula eget facilisis laoreet. Curabitur a hendrerit eros.",
  ingredients: "stuff and things",
  directions: "In gravida dui a metus euismod pulvinar. Cras pulvinar imperdiet feugiat. Maecenas blandit tellus nec odio lacinia, in rhoncus ligula tristique. Vestibulum mollis, orci at bibendum sodales, ligula lectus scelerisque leo, quis varius mauris libero quis eros. Donec tortor velit, ullamcorper at venenatis sit amet, blandit vitae urna. Duis et ornare lorem. Maecenas eu quam rhoncus mauris ornare malesuada. Vestibulum in fermentum nulla.",
  category: "American",
  prepTime: 20,
  cookTime: 30,
  numOfServings: 8,
  yields: 0
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  return recipesService.getRecipes()
  .then(list => {   res.render('recipes', { recipeList: list, details: data})})

});

module.exports = router;

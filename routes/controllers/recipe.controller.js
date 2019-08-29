const Recipe = require('../../views/data/recipe.model');

exports.listRecipes = (req, res) => {
    Recipe.find((err, recipes) => {
        if (err) return next(err);
        res.json(recipes);
    });
};

exports.addRecipe = (req, res) => {
    const recipe = new Recipe({
        ingredient1: req.body.ingredient,
        ingredient2: req.body.ingredient,
        ingredient3: req.body.ingredient,
        ingredient4: req.body.ingredient,
        ingredient5: req.body.ingredient,
        ingredient6: req.body.ingredient,
        ingredient7: req.body.ingredient,
        ingredient8: req.body.ingredient,
        ingredient9: req.body.ingredient,
        ingredient10: req.body.ingredient,
        ingredient11: req.body.ingredient,
        ingredient12: req.body.ingredient,
        ingredient13: req.body.ingredient,
        ingredient14: req.body.ingredient,
        ingredient15: req.body.ingredient,
        ingredient16: req.body.ingredient,
        ingredient17: req.body.ingredient,
        ingredient18: req.body.ingredient,
        ingredient19: req.body.ingredient,
        ingredient20: req.body.ingredient,
        directions: req.body.directions
    });
    
    recipe.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Recipe added successfully');
    });

    exports.recipeDetails = (req, res) => {
        Recipe.findById(req.params.id, (err, recipe) => {
            if (err) return next(err);
            res.send(recipe);
    });

    exports.updateRecipe = (req, res) => {
        Recipe.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, (err, recipe) => {
            if (err) return next(err);
            res.send('Recipe updated.');
        });
    };

    exports.deleteRecipe = (req, res) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    };
};
}
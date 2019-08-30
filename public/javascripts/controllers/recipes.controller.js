const Recipe = require("../data/recipe.model");

exports.listOfRecipes = (req, res) => {
    Recipe.find({}, (err, recipes) => {
        if (err) {
            console.log(err);
            return next(err);
        }

        res.json(recipes);
    });
};

exports.addRecipe = (req, res) => {
    var recipe = new Recipe({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        category: req.body.category,
        prep_time: req.body.prep_time,
        cook_time: req.body.cook_time,
        number_of_servings: req.body.number_of_servings
    });
    console.log(req);
    recipe.save(function (err, savedRecipe) {
        if (err) {
            console.log("Create Recipe Error:");
            console.log(err);
        }
        console.log(savedRecipe);
    });
    res.redirect("/recipes-data");
}

exports.loadRecipes = (req, res) => {
    var newRecipe = new Recipe(
        {
            name: "Mac and Cheese",
            description: "Yummy and crowd pleasing Mac and Cheese",
            ingredients: [{ ingredient: "Kosher salt" }, { ingredient: "Vegetable oil" }, { ingredient: "1 pound elbow macaroni or cavatappi" }, { ingredient: "1 quart milk" }, { ingredient: "8 tablespoons (1 stick) unsalted butter, divided" }, { ingredient: "1/2 cup all-purpose flour" }, { ingredient: "12 ounces Gruyere, grated (4 cups)" }, { ingredient: "8 ounces extra-sharp Cheddar, grated (2 cups)" }, { ingredient: "1/2 teaspoon freshly ground black pepper" }, { ingredient: "1/2 teaspoon ground nutmeg" }, { ingredient: "3/4 pound fresh tomatoes (4 small)" }, { ingredient: "1 1/2 cups fresh white bread crumbs (5 slices, crusts removed)" }],
            directions: "Preheat the oven to 375 degrees F. /n Drizzle oil into a large pot of boiling salted water. Add the macaroni and cook according to the directions on the package, 6 to 8 minutes. Drain well. /n Meanwhile, heat the milk in a small saucepan, but don't boil it. Melt 6 tablespoons of butter in a large (4-quart) pot and add the flour. Cook over low heat for 2 minutes, stirring with a whisk. While whisking, add the hot milk and cook for a minute or two more, until thickened and smooth. Off the heat, add the Gruyere, Cheddar, 1 tablespoon salt, pepper, and nutmeg. Add the cooked macaroni and stir well. Pour into a 3-quart baking dish. /n Slice the tomatoes and arrange on top. Melt the remaining 2 tablespoons of butter, combine them with the fresh bread crumbs, and sprinkle on the top. Bake for 30 to 35 minutes, or until the sauce is bubbly and the macaroni is browned on the top.",
            category: "American",
            prep_time: 20,
            cook_time: 30,
            number_of_servings: 8
        }
    );

    newRecipe.save(function (err, savedRecipe) {
        if (err) {
            console.log("CreateRecipe Error:");
            console.log(err);
        } else {
            console.log(savedRecipe);
        }
    });


    res.redirect("/recipes-data");
};


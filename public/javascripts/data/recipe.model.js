const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name:{
        type: String
    },
    description: {
        type: String
    },
    ingredients: [{ ingredient: String }],
    directions: {
        type: String
    },
    category: {
        type: String
    },
    prep_time: {
        type: Number
    },
    cook_time: {
        type: Number
    },
    number_of_servings: {
        type: Number
    }

});

module.exports = mongoose.model('Recipe', RecipeSchema);
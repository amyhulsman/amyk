const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: [{ ingredient: String }],
    directions: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    prep_time: {
        type: Number,
        required: true
    },
    cook_time: {
        type: Number,
        required: true
    },
    number_of_servings: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Recipe', RecipeSchema);
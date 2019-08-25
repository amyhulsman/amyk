const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    recipe: {
        name: String,
        required: true,
        max: 100,
    },
    Category: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient1: {
        type: String,
        required: true,
        max: 100,
    },
    ingredient2: {
        type: String,
        required: true,
        max: 100,
    },
    ingredient3: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient4: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient5: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient6: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient7: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient8: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient9: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient10: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient11: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient12: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient13: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient14: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient15: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient16: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient17: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient18: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient19: {
        type: String,
        required: false,
        max: 100,
    },
    ingredient20: {
        type: String,
        required: false,
        max: 100,
    },
    directions: {
        type: String,
        required: true,
        max: 500,
    },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
fetch = require("node-fetch");

exports.getRecipes = () => {
    return fetch('http://localhost:3000/recipes-data')
        .then(res => res.json())
        .then(json => json);
};
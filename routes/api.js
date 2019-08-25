const express = require('express');

const books = require('../views/data/recipes');

const router = express.Router();

router.get('/api/recipes', (req, res, next) => {
    res.render('recipes', recipes);
});

module.exports= router;
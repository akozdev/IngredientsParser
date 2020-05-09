const path = require('path');

const config = require('./config');
const loadRecipes = require('./utils/loadRecipes');
const saveRecipes = require('./utils/saveRecipes');
const parseIngredients = require('./layers/parseIngredients');

const recipes = loadRecipes(config.RECIPES_PATH);

saveRecipes(path.resolve(__dirname, 'data', 'test'), recipes);
const path = require('path');

const config = require('./config');
const loadRecipes = require('./utils/loadRecipes');
const saveRecipes = require('./utils/saveRecipes');
const flattenRecipe = require('./layers/flattenRecipe');
const parseIngredients = require('./layers/parseIngredients');

const recipes = loadRecipes(config.RECIPES_PATH);

const newRecipes = recipes.map(el => {
  try {
    let recipe = flattenRecipe(el);
    recipe = parseIngredients(recipe);

    return recipe;
  } catch (e) {
    return null;
  }
});















// saveRecipes(path.resolve(__dirname, 'data', 'test'), recipes);
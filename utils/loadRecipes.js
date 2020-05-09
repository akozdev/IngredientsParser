const fs = require('fs');
const path = require('path');

/**
 * Load recipes from json files.
 *
 * @param {string} pathTorecipes The absolute or relative path to directories with recipes.
 * @returns {array} The array of recipe objects.
 */
function loadRecipes(pathToRecipes) {
  const recipes = fs.readdirSync(pathToRecipes).map(filename => {
    const pathToRecipe = path.resolve(pathToRecipes, filename);
    const recipe = fs.readFileSync(pathToRecipe, { encoding: 'UTF-8' });

    return JSON.parse(recipe);
  });

  return recipes;
}

module.exports = loadRecipes;
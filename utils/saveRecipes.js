const fs = require('fs');
const path = require('path');

/**
 * Saves recipe objects to individual files.
 *
 * @param {string} dir The path to a directory to which the recipes should be saved
 * @param {array} recipes The array of recipe objects.
 */
function saveRecipes(dir, recipes) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  recipes.forEach(recipe => {
    // Remove the recipe from recipe.recipe.recipe_id later (simplify the object)
    fs.writeFileSync(path.resolve(dir, `${recipe.recipe.recipe_id}.json`), JSON.stringify(recipe));
  })
}

module.exports = saveRecipes;
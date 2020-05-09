/**
 * Flattens recipe object
 *
 * @param {object} recipe The recipe object
 * @returns {object} The flattened recipe object
 */
function flattenRecipe(recipe) {
  return recipe.recipe;
}

module.exports = flattenRecipe;
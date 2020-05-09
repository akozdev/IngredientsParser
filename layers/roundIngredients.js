/**
 * Rounds ingredients, for example, 0.33333 becomes 0.33
 *
 * @param {object} recipe The recipe object containing ingredients array
 * @returns {object} The recipe object with rounded ingredients
 */
function roundIngredients(recipe) {

  recipe.ingredients.forEach(ingredientObj => {
    if (typeof ingredientObj.count === 'number') {
      ingredientObj.count = Math.round((ingredientObj.count + Number.EPSILON) * 100) / 100
    }
  });

  return recipe;
}

module.exports = roundIngredients;
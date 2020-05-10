const removeAdditionalWhitespace = require('../utils/removeAdditionalWhitespace');

/**
 * Join the count, unit and the rest of ingredient together.
 *
 * @param recipe The recipe object containing ingredients array.
 * @returns {object} The recipe objects with joined ingredients.
 */
function joinIngredients(recipe) {
  recipe.ingredients = recipe.ingredients.map(ingredientObj => {
    if (ingredientObj.unit) {
      return removeAdditionalWhitespace(`${ingredientObj.count} ${ingredientObj.unit} of ${ingredientObj.ingredient}`);
    } else {
      return removeAdditionalWhitespace(`${ingredientObj.count} ${ingredientObj.unit} ${ingredientObj.ingredient}`);
    }
  });

  return recipe;
}

module.exports = joinIngredients;
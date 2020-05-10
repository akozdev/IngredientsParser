/* TODO
* Need to improve the algorithm of catching the nonsense ingredients.
* Currently it only checks if it does not contain alphanumeric characters.
 */

/**
 * Removes ingredients that does not make sense from the recipe object.
 *
 * @param recipe The recipe object containing ingredients array.
 * @returns {object} The recipe object with nonsense ingredients deleted.
 */
function removeNonsense(recipe) {
  // Check for non-alphanumeric characters only
  var reg = /^[^\dA-Za-z]*$/;

  recipe.ingredients = recipe.ingredients.filter(ingredientObj => {
    return !reg.test(ingredientObj.ingredient);
  });

  return recipe;
}

module.exports = removeNonsense;
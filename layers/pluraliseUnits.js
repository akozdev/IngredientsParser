/**
 * Pluralises the unit if more than 1 count, for example, 2 tbsps, instead of 2 tbsp
 *
 * @param recipe The recipe object containing ingredients array
 * @returns {object} The recipe object with pluralised ingredients' units
 */
function pluraliseUnits(recipe) {
  const units = ['tbsp', 'oz', 'tsp', 'cup', 'pound', 'pinch', 'pint'];
  const pluralUnits = ['tbsps', 'oz', 'tsps', 'cups', 'pounds', 'pinches', 'pints'];

  recipe.ingredients.forEach((ingredientObj, ingredientIndex) => {
    units.forEach((unit, unitIndex) => {
      if (ingredientObj.unit === unit) {
        if (ingredientObj.count > 1) {
          recipe.ingredients[ingredientIndex].unit = pluralUnits[unitIndex];
        }
      }
    });
  });

  return recipe;
}

module.exports = pluraliseUnits;
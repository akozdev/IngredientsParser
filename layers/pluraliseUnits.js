/**
 * Pluralises the unit if more than 1 count, for example, 2 tbsps, instead of 2 tbsp
 *
 * @param recipe The recipe object containing ingredients array
 * @returns {object} The recipe object with pluralised ingredients' units
 */
function pluraliseUnits(recipe) {
  const units = ['tbsp', 'oz', 'tsp', 'cup', 'pound', 'pinch'];
  const pluralUnits = ['tbsps', 'oz', 'tsps', 'cups', 'pounds', 'pinches'];

  recipe.ingredients.forEach(ingredientObj => {
    console.log(ingredientObj);
    units.forEach((unit, index) => {
      if (ingredientObj.ingredient.includes(unit)) {
       ingredientObj.ingredient.replace(unit, pluralUnits[index]);
      }
    });
  });

  return recipe;
}

module.exports = pluraliseUnits;
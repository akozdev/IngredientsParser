const parseMixedUnit = require('../utils/parseMixedUnit');

/**
 * Remove ingredients with more than one unit, for example, 500g 2oz of pasta.
 *
 * @param recipe The recipe object containing ingredients array
 * @returns {recipe} The recipe object
 */
function removeDoubleUnits(recipe) {
  const units = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound', 'pint', 'ml', 'l', 'g', 'kg'];

  recipe.ingredients.forEach(ingredient => {
    console.log(ingredient);
    const ingredientArr = ingredient.split(' ');
    const unitObjArr = [];

    ingredientArr.forEach(el => {
      unitObjArr.push(parseMixedUnit(el));
    });

    unitObjArr.forEach((unitObj, unitObjIndex) => {
      units.forEach(unit => {
        if (unitObj.unit == unit && unitObjIndex !== 0) {
          unitObjArr.splice(unitObjIndex, 1);
        }
      });
    });

    console.log(unitObjArr);
  })


  return recipe;
}

module.exports = removeDoubleUnits;
/**
 * Parses the ingredients of a recipe, so that it preserves the same style throughout all of the recipes
 *
 * @param {object} recipe The recipe object containing ingredients property
 * @returns {object} The recipe object with parsed ingredients
 */
function parseIngredients(recipe) {
  const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
  const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
  const units = [...unitsShort, 'kg', 'g'];

  const newIngredients = recipe.ingredients.map(el => {
    // 1) Uniform units
    let ingredient = el.toLowerCase().trimStart();
    unitsLong.forEach((unit, i) => {
      ingredient = ingredient.replace(unit, unitsShort[i]);
      ingredient = ingredient.replace(",", "");
    });

    // 2) Remove parentheses
    ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

    // 3) Parse ingredients into count, unit and ingredient
    const arrIng = ingredient.split(' ');

    const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

    let objIng;
    if (unitIndex > -1) {
      // There is a unit
      // Ex. 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
      // Ex. 4 cups, arrCount is [4]
      const arrCount = arrIng.slice(0, unitIndex);

      let count;
      if (arrCount.length === 1) {
        count = eval(arrIng[0].replace('-', '+'));
      } else if (arrCount.length === 0) {
        count = 1;
      } else {
        count = eval(arrIng.slice(0, unitIndex).join('+'));
      }

      objIng = {
        count,
        unit: arrIng[unitIndex],
        ingredient: arrIng.slice(unitIndex + 1).join(' ')
      };

    } else if (parseInt(arrIng[0], 10)) {
      // There is NO unit, but 1st element is number
      objIng = {
        count: parseInt(arrIng[0], 10),
        unit: '',
        ingredient: arrIng.slice(1).join(' ')
      }
    } else if (unitIndex === -1) {
      // There is NO unit and NO number in 1st position
      objIng = {
        count: '',
        unit: '',
        ingredient
      }
    }

    return objIng;
  });

  recipe.ingredients = newIngredients;

  return recipe;
}

module.exports = parseIngredients;